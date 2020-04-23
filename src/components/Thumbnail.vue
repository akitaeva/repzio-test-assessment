<template>
  <div class="product-thumbnail">
    <h1>{{ item.ItemName }}</h1>
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
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">

.product-thumbnail {
  padding: 1rem 2rem;
  border: 1px solid green;
  }
}
</style>
