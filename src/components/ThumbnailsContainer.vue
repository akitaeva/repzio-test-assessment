<template>
  <div class="product-thumbnails-container">
    <div class="message">
      <h3>{{ data.Message }}</h3>
    </div>
    <product-thumbnail
      v-for="item in data.items"
      v-bind:key="item.ProductID"
      :itemName="item.ItemName"
      :description="item.Description"
      :dimensions="item.Dimensions"
      :imageUrl="item.PhotoName"
      :basePrice="item.BasePrice"
      :inStock="item.OnHandQuantity"
    />
  </div>
</template>

<script>
import data from "@/data.json";
import Thumbnail from "@/components/Thumbnail";

export default {
  name: " ThumbnailsContainer",
  data() {
    return {
      data: data
    };
  },
  components: {
    "product-thumbnail": Thumbnail
  }
};
</script>

<style scoped lang="scss">
.product-thumbnails-container {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 2rem 3rem;
}
</style>
