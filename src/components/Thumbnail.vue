<template>
  <div class="product-thumbnail">
    <h3>{{ itemName }}</h3>
    <router-link to="/product/:id">See Details</router-link>
  </div>
</template>

<script>
import data from "@/data.json";

export default {
  name: "Thumbnail",
  data() {
    return {
      data: data
    };
  },
  // props: ["itemName", "description"]
  props: {
    itemName: String,
    description: String,
    dimensions: String,
    basePrice: Number,
    inStock: Number,
    imageUrl: String
  }
};
</script>

<style scoped lang="scss">
.product-thumbnail {
  padding: 1rem 2rem;
  border: 1px solid green;
}
</style>
