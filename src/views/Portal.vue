<template>
  <div id="portal">
    <catalogue />
    <sidebar />
  </div>
</template>

<script>
import Sidebar from "@/components/shared/Sidebar.vue";
import ThumbnailsContainer from "@/components/ThumbnailsContainer.vue";

export default {
  name: "Portal",
  components: {
    sidebar: Sidebar,
    catalogue: ThumbnailsContainer
  }
};
</script>

<style scoped lang="scss">
#portal {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 15rem;
}
</style>
