<template>
  <div id="portal">
    <router-view></router-view>
    <sidebar v-if="!isMobile" />
    <salesRepInfo v-else />
  </div>
</template>

<script>
import Sidebar from "@/components/shared/Sidebar.vue";
import SalesRepDetails from "@/components/SalesRepDetails.vue";

export default {
  name: "Portal",
  data() {
    return {
      isMobile: false
    };
  },
  components: {
    sidebar: Sidebar,
    salesRepInfo: SalesRepDetails
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.getViewWidth);
      this.getViewWidth();
    });
  },
  methods: {
    getViewWidth() {
      this.isMobile = document.documentElement.clientWidth < 700;
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getViewWidth);
  }
};
</script>

<style scoped lang="scss">
#portal {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 15rem;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
}
</style>
