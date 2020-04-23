<template>
  <div id="header">
    <img alt="RepZio Logo" src="@/assets/RepZio-Logo.png" />
    <div id="nav-links">
      <router-link to="/">Portal</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
#header {
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #f9ba33;
    }
  }

  img {
    max-width: 10rem;
    margin-right: 1.5rem;
  }
}

#nav-links {
  width: 100%;
  max-width: 30vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 5vw;
}
</style>
