<script setup>
import Intro from "@/components/home/Intro.vue";
</script>

<template>
  <div class="root">
    <Separate :is-none="true"></Separate>
    <Intro></Intro>
    <Separate></Separate>
  </div>
</template>

<style lang="scss">
.root {
  max-width: $max-width;
  margin: 0 auto;
  @include Flex(column, center, center);
}
</style>
