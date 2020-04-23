<template>
  <div class="rep-details">
    <h6>Your designated Sales Representative</h6>
    <div class="sales-rep-contacts">
      <h5>{{ repInfo.FirstName }} {{ repInfo.LastName }}</h5>
      <h5>Email: {{ repInfo.EmailAddress }}</h5>
      <h5>Phone: {{ repInfo.Phone }}</h5>
    </div>
  </div>
</template>

<script>
import data from "@/data.json";

export default {
  name: "Catalogue",
  data() {
    return {
      repInfo: data.SalesRep
    };
  }
};
</script>

<style scoped lang="scss">
.rep-details {
  padding: 1rem 0.75rem;
  background-color: #efefef;
  border: 1px solid #f9ba33;
  border-left: none;
}

h6 {
  background-color: #f9ba33;
  padding: 0.3rem 0.5rem;
  margin-bottom: 0.75rem;
}
</style>
