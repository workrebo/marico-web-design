<template>
  <div class="blog">
    <HeadingText />
    <ContentSourcesCompany />
    <Audience />
    <GetStart />
  </div>
</template>
<script>
import HeadingText from "@/components/Blog/HeadingText.vue";
import ContentSourcesCompany from "@/components/Blog/ContentSourcesCompany.vue";
import Audience from "@/components/Home/Audience.vue";
import GetStart from "@/components/Home/GetStart.vue";
export default {
  name: "Pricing",
  components: {
    HeadingText,
    ContentSourcesCompany,
    Audience,
    GetStart,
  },
};
</script>

<style></style>
