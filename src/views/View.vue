<script setup>
import Separate from "@/components/Separate.vue";
import Intro from "@/components/Intro.vue";
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
