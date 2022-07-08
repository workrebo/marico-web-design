<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayouts from "@/Layouts/MainLayouts";
import EmptyLayouts from "@/Layouts/EmptyLayouts";

export default {
  name: "Home",
  components: {
    MainLayouts,
    EmptyLayouts,
  },
  computed: {
    layout() {
      return (this.$route.meta.layouts || "Empty") + "-layouts";
    },
  },
};
</script>
<style lang="scss">
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>