<template>
  <div id="app" ref="app">
    <button @click="handleAsyncTranslate">async test</button>
    <v-google-translate
      @select="test"
      defaultLanguageCode="en"
      defaultPageLanguageCode="zh-CN"
      :fetchBrowserLanguage="false"
    ></v-google-translate>
    <!-- <div class="test">My name is i7eo</div> -->
    <div ref="carName" class="col xyz-nested notranslate">
      雅阁2016款 2.0L 舒适版
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    test(code) {
      console.log(code);
    },
    handleAsyncTranslate() {
      const appEl = this.$refs.app;
      if (appEl.classList.contains("notranslate")) {
        appEl.classList.remove("notranslate");
      }
    },
  },
  mounted() {
    setTimeout(() => {
      const carNameEl = this.$refs.carName;
      if (carNameEl.classList.contains("notranslate")) {
        carNameEl.classList.remove("notranslate");
      }
    }, 2000);
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
