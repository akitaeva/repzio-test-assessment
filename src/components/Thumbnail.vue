<template>
  <div class="product-thumbnail">
    <h3>{{ itemName }}</h3>
    <div class="product-image">
      <img :src="imageUrl" />
    </div>
    <div class="product-info-container">
      <div class="product-info">
        <div class="product-details-container">
          <p class="product-details">
            Dimesions:
            <!-- this is a quick FIX for dimension values that span multiple lines -->
            <span> {{ dimensions.substring(0, 20) }} </span>
          </p>
          <p class="product-details">
            Price: $<span> {{ basePrice }} </span>
          </p>
          <p class="product-details">
            In Stock:
            <span class="price"> {{ inStock > 0 ? inStock : "N/A" }} </span>
          </p>
        </div>
      </div>

      <div class="actions">
        <button @click="addToCart">Add to Cart</button>
        <router-link :to="`product/${productId}`">See Details</router-link>
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
    inStock: Number,
    productId: Number
  },
  methods: {
    addToCart() {
      alert(
        "Apologies, the cart's state management is beyound the scope of this assignment."
      );
    }
  }
};
</script>

<style scoped lang="scss">
.product-thumbnail {
  margin: 0.5rem;
  padding: 2rem 1.5rem;
  width: 25rem;
  height: 35rem;
  border: 1px solid #cfceca;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 700px) {
    width: 20rem;
  }
}

p {
  word-wrap: break-word;
}

h3 {
  border-bottom: 2px solid #efefef;
  text-align: center;
  padding-bottom: 0.25rem;
}

.product-image {
  width: 16rem;
  height: 16rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
}

.product-info {
  width: 100%;
}

.product-info-container {
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.product-details-container {
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #efefef;
  border-radius: 2px;
  max-height: 4rem;
}

.product-details {
  font-size: 0.85rem;
  font-weight: 700;
  text-align: left;
  margin: 0.75rem 0.5rem;
  max-width: 9rem;

  span {
    display: block;
    font-weight: 500;
    max-height: 1.2rem;
  }
}

.actions {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    font-weight: 600;
    color: #f9ba33;
  }

  button {
    color: white;
    font-weight: 500;
    font-size: 0.75rem;
    background: #f9ba33;
    cursor: pointer;
    padding: 0.6rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    max-width: 3rem;
    min-width: fit-content;
    max-height: 3.5rem;
    border: 1px solid #f9ba33;
    z-index: 113;
    transition: all 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }
}

.price {
  font-weight: 700;
  font-size: 0.9rem;
  text-align: right;
}
</style>
