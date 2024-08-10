<script setup lang="ts">
import { computed } from "vue";
import ArrowBack from "@/components/global/ArrowBack.vue";
import { RoutesName } from "@/assets/resources/language";
import { ViewLibComponents } from "@/assets/resources/language/index.js";

const ROUTE_INITIAL = RoutesName.componentsIntro;
const titles = computed(() => ViewLibComponents.toggle.titles);
const description = computed(() => ViewLibComponents.toggle.description);
const defaultValues = computed(() => ViewLibComponents.toggle.default);
const attributes = computed(() => ViewLibComponents.toggle.attributes);
const events = computed(() => ViewLibComponents.toggle.events);

</script>

<template>
  <section class="j5-components-toggle">
    <ArrowBack :route-name="ROUTE_INITIAL" />
    <section class="j5-components-toggle__section j5-components-toggle__section--summary section">
      <h1 class="j5-components-toggle__title title">{{ titles.title }}</h1>
      <div class="j5-components-toggle__container j5-components-toggle__container--description container">
        <j5-toggle checked="true" label="Inactivo/Activo" m-auto></j5-toggle>
        <j5-toggle label="Inactivo/Activo" m-auto></j5-toggle>
      </div>
    </section>
    <Separate></Separate>
    <section class="j5-components-toggle__section j5-components-toggle__section--summary section">
      <h2 class="j5-components-toggle__title subtitle">{{ titles.description }}</h2>
      <div class="j5-components-toggle__container j5-components-toggle__container--description container"
        v-html="description"></div>
    </section>
    <Separate :is-none="true"></Separate>
    <section class="j5-components-toggle__section j5-components-toggle__section--summary section">
      <h2 class="j5-components-toggle__title subtitle">{{ titles.default }}</h2>
      <div class="j5-components-toggle__container j5-components-toggle__container--description container"
        v-html="defaultValues"></div>
    </section>
    <Separate></Separate>
    <section class="j5-components-toggle__section j5-components-toggle__section--summary section">
      <h2 class="j5-components-toggle__title subtitle">{{ titles.attributes }}</h2>
      <div class="j5-components-toggle__container j5-components-toggle__container--description container"
        v-html="attributes"></div>
    </section>
    <Separate :is-none="true"></Separate>
    <section class="j5-components-toggle__section j5-components-toggle__section--summary section">
      <h2 class="j5-components-toggle__title subtitle">{{ titles.events }}</h2>
      <div class="j5-components-toggle__container j5-components-toggle__container--description container"
        v-html="events"></div>
    </section>
    <Separate></Separate>
  </section>
</template>

<style lang="scss">
.j5-components-toggle {
  width: 100%;
}
</style>
