<template>
  <div class="product-thumbnails-container">
    <product-thumbnail
      v-for="item in data.items"
      v-bind:key="item.ProductID"
      :itemName="item.ItemName"
      :description="item.Description"
      :dimensions="item.Dimensions"
      :basePrice="item.BasePrice"
      :inStock="item.OnHandQuantity"
      :imageUrl="item.PhotoName"
    />
  </div>
</template>

<script>
import data from "@/data.json";
import Thumbnail from "@/components/Thumbnail";

export default {
  name: "ThumbnailsContainer",
  data() {
    return {
      data: data
    };
  },
  props: {
    msg: String
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
  border: 1px solid red;
}
</style>
