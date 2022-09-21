<script setup>
import Intro from "@/components/home/Intro.vue";
import Separate from "@/components/global/Separate.vue";
</script>

<template>
  <div class="root">
    <Intro></Intro>
    <Separate></Separate>
  </div>
</template>

<style lang="scss">
.root {
  max-width: 1024px;
  margin: 0 auto;
}
</style>
