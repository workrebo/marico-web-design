<template>
  <div class="home">
    <MainHeading />
    <HomeButton />
    <LoveMarico />
    <StepOne />
    <YourHomePage />
    <StepTwo />
    <OneLinkCollection />
    <StepThree />
    <CreateShare />
    <ExpertsAgree />
    <Audience />
    <GetStart />
  </div>
</template>

<script>
import MainHeading from "@/components/Home/MainHeading.vue";
import HomeButton from "@/components/Home/HomeButton.vue";
import LoveMarico from "@/components/Home/LoveMarico.vue";
import StepOne from "@/components/Home/StepOne.vue";
import YourHomePage from "@/components/Home/YourHomePage.vue";
import StepTwo from "@/components/Home/StepTwo.vue";
import OneLinkCollection from "@/components/Home/OneLinkCollection.vue";
import StepThree from "@/components/Home/StepThree.vue";
import CreateShare from "@/components/Home/CreateShare.vue";
import ExpertsAgree from "@/components/Home/ExpertsAgree.vue";
import Audience from "@/components/Home/Audience.vue";
import GetStart from "@/components/Home/GetStart.vue"
export default {
  name: "Home",
  components: {
    MainHeading,
    HomeButton,
    LoveMarico,
    StepOne,
    YourHomePage,
    StepTwo,
    OneLinkCollection,
    StepThree,
    CreateShare,
    ExpertsAgree,
    Audience,
    GetStart
  },
};
</script>

<style></style>
