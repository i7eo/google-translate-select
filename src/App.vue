<template>
  <div id="app">
    <v-google-translate @select="test"></v-google-translate>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    test(code) {
      console.log(code);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
