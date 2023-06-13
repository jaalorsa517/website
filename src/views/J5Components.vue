<script setup>
import { computed } from "vue";
import { Components } from "@/assets/resources";

const title = computed(() => Components.title);
const description = computed(() => Components.description);
const features = computed(() => Components.features.replace(/<j5-/g, "&lt;j5-"));
</script>

<template>
  <section class="j5-components">
    <Separate></Separate>
    <section class="j5-components__section j5-components__section--summary">
      <h1 class="j5-components__title">{{ title }}</h1>
      <div class="j5-components__container j5-components__container--description" v-html="description"></div>
    </section>
    <Separate :is-none="true"></Separate>
    <section class="j5-components__section j5-components__section--instruction">
      <h2 class="j5-components__subtitle">Instrucciones</h2>
      <div class="j5-components__container j5-components__container--features" v-html="features"></div>
    </section>
    <Separate></Separate>
  </section>
</template>
<style lang="scss">
.j5-components {
  @include Flex(column, flex-start, center);
  margin: auto;
  padding: 0.5em;
  max-width: $max-width;
  min-height: calc(100vh - ($height_fixed * 2));

  &__section {
    width: 100%;
    padding: $padding_sections;
  }

  &__title {
    margin: 0;
    text-align: center;
  }

  &__subtitle {
    margin: 0;
    text-align: center;
  }

  &__container {
    margin: 1.5em 0;
    & p {
      margin: 0.3em 0;
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
