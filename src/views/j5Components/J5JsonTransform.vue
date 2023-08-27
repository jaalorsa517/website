<script setup>
import { computed } from "vue";
import ArrowBack from "@/components/global/ArrowBack.vue";
import { ViewLibComponents } from "@/assets/resources/language/index.js";
import { RoutesName } from "@/assets/resources/language";

const ROUTE_INITIAL = RoutesName.componentsIntro;
const titles = computed(() => ViewLibComponents.jsonTransformer.titles);
const description = computed(() => ViewLibComponents.jsonTransformer.description);
const defaultValues = computed(() => ViewLibComponents.jsonTransformer.default);
</script>
<template>
  <section class="j5-components-json">
    <ArrowBack :route-name="ROUTE_INITIAL" />
    <Separate :is-none="true"></Separate>
    <section class="j5-components-json__section j5-components-json__section--summary section">
      <h1 class="j5-components-json__title title">{{ titles.title }}</h1>
      <j5-json-transform class="j5-components-json__demo" m-auto></j5-json-transform>
    </section>
    <Separate></Separate>
    <section class="j5-components-json__section j5-components-json__section--summary section">
      <h2 class="j5-components-json__title subtitle">{{ titles.description }}</h2>
      <div class="j5-components-json__container j5-components-json__container--description container"
        v-html="description"></div>
    </section>
    <Separate :is-none="true"></Separate>
    <section class="j5-components-json__section j5-components-json__section--summary section">
      <h2 class="j5-components-json__title subtitle">{{ titles.default }}</h2>
      <div class="j5-components-json__container j5-components-json__container--description container"
        v-html="defaultValues"></div>
    </section>
    <Separate></Separate>
  </section>
</template>

<style lang="scss">
.j5-components-json {
  width: 100%;

  &__demo {
    width: 300px
  }
}
</style>
