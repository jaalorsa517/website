<script setup lang="ts">
import { computed } from "vue";
import ArrowBack from "@/components/global/ArrowBack.vue";
import { RoutesName } from "@/assets/resources/language";
import { ViewLibComponents } from "@/assets/resources/language/index.js";

const ROUTE_INITIAL = RoutesName.componentsIntro;
const titles = computed(() => ViewLibComponents.tooltip.titles);
const description = computed(() => ViewLibComponents.tooltip.description);
const defaultValues = computed(() => ViewLibComponents.tooltip.default);
const attributes = computed(() => ViewLibComponents.tooltip.attributes);
</script>
<template>
  <section class="j5-components-tooltip">
    <ArrowBack :route-name="ROUTE_INITIAL" />
    <section class="j5-components-tooltip__section j5-components-tooltip__section--summary section">
      <h1 class="j5-components-tooltip__title title">{{ titles.title }}</h1>
      <div class="j5-components-tooltip__container j5-components-tooltip__container--description container">
        <j5-tooltip class="cuatro"
          text="Hello World this is a tooltip for example. I am a tooltip and I want to be a tooltip."
          m-auto>
          <p class="j5-components-tooltip__text" card>Mouse over me!</p>
        </j5-tooltip>
      </div>
    </section>
    <Separate></Separate>
    <section class="j5-components-tooltip__section j5-components-tooltip__section--summary section">
      <h2 class="j5-components-tooltip__title subtitle">{{ titles.description }}</h2>
      <div class="j5-components-tooltip__container j5-components-tooltip__container--description container"
        v-html="description"></div>
    </section>
    <Separate :is-none="true"></Separate>
    <section class="j5-components-tooltip__section j5-components-tooltip__section--summary section">
      <h2 class="j5-components-tooltip__title subtitle">{{ titles.default }}</h2>
      <div class="j5-components-tooltip__container j5-components-tooltip__container--description container"
        v-html="defaultValues"></div>
    </section>
    <Separate></Separate>
    <section class="j5-components-tooltip__section j5-components-tooltip__section--summary section">
      <h2 class="j5-components-tooltip__title subtitle">{{ titles.attributes }}</h2>
      <div class="j5-components-tooltip__container j5-components-tooltip__container--description container"
        v-html="attributes"></div>
    </section>
    <Separate :is-none="true"></Separate>
  </section>
</template>

<style lang="scss">
.j5-components-tooltip {
  width: 100%;

  &__text{
    border-top: 5px solid var(--color-third);
    border-top-left-radius: 0.2em;
    border-top-right-radius: 0.2em;
  }
}
</style>
