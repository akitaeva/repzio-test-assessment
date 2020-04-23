<template>
  <div id="sidebar">
    <app-cart />
    <sales-rep />
  </div>
</template>

<script>
import Cart from "@/components/shared/Cart.vue";
import SalesRepDetails from "@/components/SalesRepDetails.vue";

export default {
  name: "Portal",
  components: {
    "app-cart": Cart,
    "sales-rep": SalesRepDetails
  }
};
</script>

<style scoped lang="scss">
#sidebar {
  border: 2px solid #f9ba33;
  border-top: none;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
