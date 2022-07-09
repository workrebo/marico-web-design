<template>
  <div class="home">
    <MainHeading />
    <HomeButton />
    <LoveMarico />
    <StepOne />
    <YourHomePage />
  </div>
</template>

<script>
import MainHeading from "@/components/Home/MainHeading.vue";
import HomeButton from "@/components/Home/HomeButton.vue";
import LoveMarico from "@/components/Home/LoveMarico.vue";
import StepOne from "@/components/Home/StepOne.vue";
import YourHomePage from "@/components/Home/YourHomePage.vue";
export default {
  name: "Home",
  components: {
    MainHeading,
    HomeButton,
    LoveMarico,
    StepOne,
    YourHomePage,
  },
};
</script>

<style></style>
