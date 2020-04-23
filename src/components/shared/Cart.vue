<template>
  <div class="app-cart">
    <h4>Your Order</h4>
    <h6>Your Cart is currently empty</h6>
  </div>
</template>

<!-- TODO: add logic  -->
<!-- build controls to increase / decrease the qty of an item  -->
<!-- check availability before placing order  -->

<style scoped lang="scss">
.app-cart {
  min-height: 30rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

h4 {
  background-color: #f9ba33;
  padding: 0.3rem 0.5rem;
  margin: 0.75rem 0;
}
</style>
