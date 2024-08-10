<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
<template>
  <section class="j5v-components">
    <RouterView />
  </section>
</template>
<style lang="scss">
.j5v-components {
  @include Flex(column, flex-start, center);
  margin: auto;
  padding: 0.5em;
  max-width: $max-width;
  min-height: calc(100vh - ($height_fixed * 2));

  .section {
    width: 100%;
    padding: $padding_sections;
  }

  .title {
    margin: 0;
    text-align: center;
  }

  .subtitle, [subtitle] {
    margin: 0;
    text-align: center;
  }

  .container {
    margin: 1.5em 0;
    & p {
      margin: 0.5em 0;
      line-height: 1.5;
    }
    & ul {
      list-style: disclosure-closed;
    }
    & li {
      margin: 0 1.5em;
    }
  }
}
</style>
