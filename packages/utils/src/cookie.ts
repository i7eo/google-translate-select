function getCurrentDomain() {
  const hostnameArray = window.location.hostname.split('.')
  return `.${hostnameArray.slice(-2).join('.')}`
}

export function setCookie(
  name: string,
  val: string | number,
  expires: number,
  domain: string
) {
  let text = String(window.encodeURIComponent(val))
  const date = new Date()
  date.setTime(date.getTime() + Number(expires) * 1000)
  text += `; expires=${date.toUTCString()}`
  // domain
  text += '; path=/'
  if (typeof domain != 'undefined' && domain != '') {
    text += `; domain=${getCurrentDomain()}`
  }
  document.cookie = `${name}=${text}`
}

export function getCookie(name: string) {
  const cookieSplitResult = document.cookie.split('; ')
  for (let i = 0; i < cookieSplitResult.length; i++) {
    const temp = cookieSplitResult[i].split('=')
    if (temp[0] == name) return unescape(temp[1])
  }
}
