<template>
  <div class="product">
    <h3>{{ productData.ItemName }}</h3>
    <div class="product-image">
      <img :src="productData.PhotoName" />
    </div>
    <p class="product-desc">
      {{
        productData.Description
          ? productData.Description
          : "Please contact us for detailed description"
      }}
    </p>
    <div class="product-info-container">
      <div class="product-info">
        <div class="product-details-container">
          <p class="product-details">
            Dimesions:
            <!-- this is a quick FIX for dimension values that span multiple lines -->
            <span> {{ productData.Dimensions }} </span>
          </p>
          <p class="product-details">
            Price: <span>${{ productData.BasePrice }} </span>
          </p>
          <p class="product-details">
            In Stock:
            <span class="price">
              {{
                productData.OnHandQuantity > 0
                  ? productData.OnHandQuantity
                  : "N/A"
              }}
            </span>
          </p>
        </div>
      </div>

      <div class="actions">
        <button @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/data.json";

export default {
  name: "ProductDetails",
  data() {
    return {
      productId: this.$route.params.id,
      //TODO: destructure incoming object
      productData: {}
    };
  },
  created: function() {
    const productObjArr = data.items.filter(item => {
      return item.ProductID === Number(this.productId);
    });
    if (productObjArr.length) {
      this.productData = productObjArr[0];
    }
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
.product {
  margin: 2rem;
  padding: 2rem 1.5rem;
  width: auto;
  min-width: 50vw;
  height: 75vh;
  border: 1px solid #cfceca;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: auto;
    vertical-align: middle;
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

.product-desc {
  font-size: 0.9rem;
  font-weight: 400;
  height: 4rem;
  overflow: hidden;
  margin: 0.4rem;
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
  justify-content: flex-end;

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
