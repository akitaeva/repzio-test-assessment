<template>
  <div id="sidebar">
    <app-cart />
    <sales-rep />
  </div>
</template>

<script>
import Cart from "@/components/Cart.vue";
import SalesRepDetails from "@/components/SalesRepDetails.vue";

export default {
  name: "Portal",
  components: {
    "app-cart": Cart,
    "sales-rep": SalesRepDetails
  }
};
</script>
