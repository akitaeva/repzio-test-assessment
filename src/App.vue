<template>
  <div id="app">
    <app-header />
    <main>
      <router-view />
    </main>
    <app-footer />
  </div>
</template>

<script>
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer
  }
};
</script>

<style lang="scss">
#app {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  max-width: 1200px;
}
</style>
