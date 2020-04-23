<template>
  <div class="product-thumbnail">
    <h3>{{ itemName }}</h3>
    <div class="product-image">
      <img :src="imageUrl" />
    </div>
    <div class="product-info">
      <p>
        {{
          description
            ? description
            : "Please contact us for detailed description"
        }}
      </p>
      <p>{{ dimensions }}</p>

      <div class="actions">
        <button>Add to Cart</button>
        <router-link to="/product/:id">See Details</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Thumbnail",
  props: {
    itemName: String,
    description: String,
    dimensions: String,
    imageUrl: String,
    basePrice: Number,
    inStock: Number
  }
};
</script>

<style scoped lang="scss">
.product-thumbnail {
  margin: 0.5rem;
  padding: 1rem 2rem 3rem;
  width: 25rem;
  height: 30rem;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;

  @media (max-width: 640px) {
    width: 16rem;
    height: 16rem;
  }
}

p {
  word-wrap: break-word;
}

.product-image {
  width: 16rem;
  height: 16rem;
  vertical-align: middle;

  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: auto;
    vertical-align: middle;
  }
}
</style>
