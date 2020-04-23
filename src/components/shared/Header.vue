<template>
  <div id="header">
    <img alt="RepZio Logo" src="@/assets/RepZio-Logo.png" />
    <div id="nav-links">
      <router-link to="/">Portal</router-link>
      <router-link to="/contact">Contact Us</router-link>
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
  padding: 0.5rem 1.5rem 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid #f9ba33;

  a {
    font-weight: bold;
    text-decoration: none;
    padding-bottom: 0.2rem;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #9e9e9e;
      border-bottom: 1px solid #f9ba33;
    }
  }

  img {
    max-width: 10rem;
    margin-right: 1.5rem;
  }
}

#nav-links {
  width: 20rem;
  max-width: 30vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 5vw;
}
</style>
