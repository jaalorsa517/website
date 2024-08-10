<script setup lang="ts">
import { computed, inject, provide } from "vue";
import { ICONS_NAMES, J5VIcons } from "@jaalorsa/j5-components-vue"
import ArrowBack from "@/components/global/ArrowBack.vue";
import { RoutesName } from "@/assets/resources/language";
import { ViewLibComponentsVue } from "@/assets/resources/language/index.js";
import { IConverter } from "@/shared/models/interfaces/IConverter";
import { ConverterServiceInject } from "@/shared/constants/injectsKey";

const convertService = inject<IConverter>(ConverterServiceInject) as IConverter

const ROUTE_INITIAL = RoutesName.componentsIntroVue;
const titles = computed(() => ViewLibComponentsVue.icons.titles);
const description = computed(() => ViewLibComponentsVue.icons.description);
const attributes = computed(() => convertService.convertStringJ5(ViewLibComponentsVue.icons.props));
const providers = computed(() => convertService.convertStringJ5(ViewLibComponentsVue.icons.providers));
const keys_icons = ICONS_NAMES
const iconsInyected = { icon_inyected: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="currentColor" fill="none" d="M10 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path stroke="currentColor" fill="none" d="M14 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path stroke="currentColor" fill="none" d="M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path stroke="currentColor" fill="none" d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path stroke="currentColor" fill="none" d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>` }
provide("j5v-icons", iconsInyected);

</script>

<template>
  <section class="j5v-components-icons">
    <ArrowBack :route-name="ROUTE_INITIAL" />
    <section class="j5v-components-icons__section j5v-components-icons__section--summary section">
      <h1 class="j5v-components-icons__title title">{{ titles.title }}</h1>
      <div class="icons">
        <div class="icons__container" v-for="ico, key in keys_icons" :key="key">
          <J5VIcons class="icons__ico" :name="ico" />
          <p>{{ ico }}</p>
        </div>
        <div class="icons__container">
          <J5VIcons class="icons__ico" name="icon_inyected" />
          <p>icon_inyected</p>
        </div>
      </div>
    </section>
    <Separate></Separate>
    <section class="j5v-components-icons__section j5v-components-icons__section--summary section">
      <h2 class="j5v-components-icons__title subtitle">{{ titles.description }}</h2>
      <div class="j5v-components-icons__container j5v-components-icons__container--description container"
        v-html="description"></div>
    </section>
    <Separate :is-none="true"></Separate>
    <section class="j5v-components-icons__section j5v-components-icons__section--summary section">
      <h2 class="j5v-components-icons__title subtitle">{{ titles.props }}</h2>
      <div class="j5v-components-icons__container j5v-components-icons__container--description container"
        v-html="attributes"></div>
    </section>
    <Separate></Separate>
    <section class="j5v-components-icons__section j5v-components-icons__section--summary section">
      <h2 class="j5v-components-icons__title subtitle">{{ titles.providers }}</h2>
      <div class="j5v-components-icons__container j5v-components-icons__container--description container"
        v-html="providers"></div>
    </section>
    <Separate :is-none="true"></Separate>
  </section>
</template>

<style lang="scss">
.j5v-components-icons {
  width: 100%;

  &__title.title {
    margin-bottom: 1em;
  }

  .icons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.3em;

    &__container {
      @include Flex(column, center, center);
      width: auto;
    }

    &__ico {
      width: 50px;
      text-align: center;
      font-size: 2em;
    }
  }

  @include pocketWidth() {
    .icons {
      @include Flex();
      padding: 0.5em;
      gap: 1em;
      flex-wrap: wrap;
      text-align: center;

    }
  }
}
</style>
