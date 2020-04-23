<template>
  <div id="footer"></div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
#footer {
  padding: 2rem 1.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9ba33;
}
</style>
