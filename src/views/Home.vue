<template>
  <div class="home">
    <MainHeading />
    <HomeButton />
    <LoveMarico />
    <StepOne />
  </div>
</template>

<script>
import MainHeading from "@/components/Home/MainHeading.vue";
import HomeButton from "@/components/Home/HomeButton.vue";
import LoveMarico from "@/components/Home/LoveMarico.vue";
import StepOne from "@/components/Home/StepOne.vue";
export default {
  name: "Home",
  components: {
    MainHeading,
    HomeButton,
    LoveMarico,
    StepOne,
  },
};
</script>

<style></style>
