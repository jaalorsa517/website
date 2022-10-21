<script setup>
import Intro from "@/components/home/Intro.vue";
import JCarousel from "@/components/home/VideosCarousel.vue";
</script>

<template>
  <div class="root">
    <Separate :is-none="true"></Separate>
    <Intro></Intro>
    <Separate></Separate>
    <JCarousel></JCarousel>
    <Separate :is-none="true"></Separate>
  </div>
</template>

<style lang="scss">
.root {
  max-width: $max-width;
  margin: 0 auto;
  @include Flex(column, center, center);
}
</style>
