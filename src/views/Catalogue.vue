<template>
  <div class="product-thumbnails-container">
    <div class="message">
      <h3>New Message:</h3>
      <div class="message-text">
        {{ data.Message }}
      </div>
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
      :productId="item.ProductID"
    />
  </div>
</template>

<script>
import data from "@/data.json";
import Thumbnail from "@/components/Thumbnail";

export default {
  name: "Catalogue",
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
  justify-content: center;
  padding: 1rem 2rem 3rem;
}

.message-text {
  background-color: #efefef;
  border-radius: 2px;
  padding: 1.5rem 2rem 2rem;
  margin: 1rem 0;
}
</style>
