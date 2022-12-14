import fs from 'fs'
import path from 'path'
import assembleReleasePlan from '@changesets/assemble-release-plan'
import { read } from '@changesets/config'
import { readPreState } from '@changesets/pre'
import readChangesets from '@changesets/read'
import { getPackages } from '@manypkg/get-packages'
import { PKG_PREFIX } from '@google-translate-select/constants'
import type { ComprehensiveRelease, NewChangeset } from '@changesets/types'

const cwd = process.cwd()
// App packages
const apps = fs
  .readdirSync(path.resolve(__dirname, '../../apps'))
  .map((name) => `${PKG_PREFIX}/${name}`)
// Internal packages
const internal = fs
  .readdirSync(path.resolve(__dirname, '../../internals'))
  .map((name) => `${PKG_PREFIX}/${name}`)
// Umbrella packages
// const componentsPkg = `${PKG_PREFIX}/ui`
const umbrellaPackages = fs
  .readdirSync(path.resolve(__dirname, '../../packages'))
  .map((name) => `${PKG_PREFIX}/${name}`)
// Packages we don't want to have on changelog
const ignorePkgs = [...apps, ...internal]

// Format package names as Start Case
function startCase(string: string) {
  const toStartCase = (s: string) => s.charAt(0).toUpperCase() + s.substring(1)
  return string
    .split(/\W/g)
    .reduce((str: string, x: any) => `${str.trim()} ${toStartCase(x)}`, '')
    .trim()
}

function getPackageName(name: string) {
  return startCase(name.replace(`${PKG_PREFIX}/`, ''))
}

// Formats displayName for each release and separate changesets
function getReleaseSummary(
  changesets: NewChangeset[],
  release: ComprehensiveRelease
) {
  const formattedChangesets = release.changesets.map((changeset) => {
    const { summary } = changesets.find((cs) => cs.id === changeset) ?? {}
    return !summary || summary?.trim().startsWith('-')
      ? summary
      : `- ${summary} \n`
  })

  // const subPackageName = `**${getPackageName(release.name)}** \`v${
  //   release.newVersion
  // }\``
  // const rootPackageName = `\`${componentsPkg}@${release.newVersion}\``
  // const displayName =
  //   release.name === componentsPkg ? rootPackageName : subPackageName

  const displayName = `**${release.name}** \`v${release.newVersion}\``

  return {
    ...release,
    changesets: formattedChangesets,
    displayName: displayName.replace(/,\s*$/, ''),
  }
}

// Get changes from changesets and returns the releases with displayName and the changes grouped
async function getChangesetEntries() {
  const packages = await getPackages(cwd)
  const preState = await readPreState(cwd)
  const config = await read(cwd, packages)
  const changesets = await readChangesets(cwd)

  const releasePlan = assembleReleasePlan(
    changesets,
    packages,
    config,
    preState
  )

  const releases = releasePlan.releases
    .filter((release) => release.changesets.length > 0) // Remove releases without changesets
    .filter((release) => !ignorePkgs.includes(release.name)) // Remove ignored packages
    .map((release) => getReleaseSummary(releasePlan.changesets, release))
    .sort((a, b) => {
      // Sort umbrella package at the top, and others alphabetically
      // if (a.name === componentsPkg) return -1
      // if (b.name === componentsPkg) return 1
      if (umbrellaPackages.includes(a.name)) return -1
      if (umbrellaPackages.includes(b.name)) return 1
      return a.name < b.name ? -1 : 1
    })

  return releases
}

async function main() {
  const releases = await getChangesetEntries()
  if (!releases.length) return

  const content =
    JSON.parse(fs.readFileSync(`${cwd}/.changelogrc`).toString()) || {}

  releases.forEach(({ displayName, changesets }) => {
    const prevState = content[displayName] || []

    content[displayName] = [...new Set([...prevState, ...changesets])]
  })

  // write to rc file
  fs.writeFileSync(`${cwd}/.changelogrc`, JSON.stringify(content))
}

main()
