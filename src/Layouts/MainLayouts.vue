<template>
  <div class="main">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>


<script>
import Header from "../components/Header.vue";
import Footer from "@/components/Footer";
export default {
  components: {
    Footer,
    Header,
  },
};
</script>


<style>
</style>