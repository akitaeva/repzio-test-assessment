<template>
  <div class="product-thumbnails-container">
    <thumbnail
      class="product-thumbnail"
      v-for="item in data.items"
      v-bind:key="item.ProductID"
    >
      <h1>{{ item.ItemName }}</h1>
    </thumbnail>
  </div>
</template>

<script>
import data from "@/data.json";
import Thumbnail from "@/components/Thumbnail";

export default {
  name: "ThumbnailContainer",
  data() {
    return {
      data: data
    };
  },
  props: {
    msg: String
  },
  components: {
    thumbnail: Thumbnail
  }
};
</script>

<style scoped lang="scss">
.product-thumbnails-container {
  border: 1px solid red;
}

.product-thumbnail {
  padding: 1rem 2rem;
  border: 1px solid green;
}
}
</style>
