<script setup>
import { computed } from "vue";
import ArrowBack from "@/components/global/ArrowBack.vue";
import { RoutesName } from "@/assets/resources/language";
import { ViewLibComponents } from "@/assets/resources/language/index.js";

const ROUTE_INITIAL = RoutesName.componentsIntro;
const titles = computed(() => ViewLibComponents.carousel.titles);
const description = computed(() => ViewLibComponents.carousel.description);
const defaultValues = computed(() => ViewLibComponents.carousel.default);
const attributes = computed(() => ViewLibComponents.carousel.attributes);
</script>
<template>
  <section class="j5-components-carousel">
    <ArrowBack :route-name="ROUTE_INITIAL" />
    <Separate :is-none="true"></Separate>
    <section class="j5-components-carousel__section j5-components-carousel__section--summary section">
      <h1 class="j5-components-carousel__title title">{{ titles.title }}</h1>
      <div class="j5-components-carousel__container j5-components-carousel__container--description container">
        <div>
          <j5-carousel class="j5-components-carousel__slider" count-slides="5" transition-auto="2000">
            <div class="j5-components-carousel__demo card" v-for="key in 15" :key="key">{{ key }}</div>
          </j5-carousel>
        </div>
      </div>
    </section>
    <Separate></Separate>
    <section class="j5-components-carousel__section j5-components-carousel__section--summary section">
      <h2 class="j5-components-carousel__title subtitle">{{ titles.description }}</h2>
      <div class="j5-components-carousel__container j5-components-carousel__container--description container"
        v-html="description"></div>
    </section>
    <Separate :is-none="true"></Separate>
    <section class="j5-components-carousel__section j5-components-carousel__section--summary section">
      <h2 class="j5-components-carousel__title subtitle">{{ titles.default }}</h2>
      <div class="j5-components-carousel__container j5-components-carousel__container--description container"
        v-html="defaultValues"></div>
    </section>
    <Separate></Separate>
    <section class="j5-components-carousel__section j5-components-carousel__section--summary section">
      <h2 class="j5-components-carousel__title subtitle">{{ titles.attributes }}</h2>
      <div class="j5-components-carousel__container j5-components-carousel__container--description container"
      v-html="attributes"></div>
    </section>
    <Separate :is-none="true"></Separate>
  </section>
</template>

<style lang="scss">
.j5-components-carousel {
  width: 100%;

  &__slider {
    --color_back_arrows: var(--color-third);
    margin: auto;
  }

  &__demo {
    width: 100px;
    height: 100px;
    margin: 5px;
    @include Flex(row, center, center);
    flex-shrink: 0;
    background-color: var(--color-white);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-top: 0.7em solid;

    &:nth-child(even) {
      border-top-color: var(--color-second);
      color: var(--color-third);
    }

    &:nth-child(odd) {
      border-top-color: var(--color-third);
      color: var(--color-second);
    }
  }
}
</style>
