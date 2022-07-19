<template>
  <div class="about">
    <CompanyLogo />
    <OurMission />
    <AboutUs />
    <OurTeam />
    <GetStart />
  </div>
</template>

<script>
import CompanyLogo from "@/components/AboutUs/CompanyLogo.vue";
import OurMission from "@/components/AboutUs/OurMission.vue";
import AboutUs from "@/components/AboutUs/AboutUs.vue";
import OurTeam from "@/components/AboutUs/OurTeam.vue";
import GetStart from "@/components/Home/GetStart.vue";
export default {
  components: {
    CompanyLogo,
    OurMission,
    AboutUs,
    OurTeam,
    GetStart,
  },
};
</script>