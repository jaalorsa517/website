<script setup lang="ts">
import { computed, inject, ref } from "vue";
import { J5VSelct } from "@jaalorsa/j5-components-vue";
import ArrowBack from "@/components/global/ArrowBack.vue";
import { RoutesName } from "@/assets/resources/language";
import { ViewLibComponentsVue } from "@/assets/resources/language/index.js";
import { IConverter } from "@/shared/models/interfaces/IConverter";
import { ConverterServiceInject } from "@/shared/constants/injectsKey";

const convertService = inject<IConverter>(ConverterServiceInject) as IConverter

const ROUTE_INITIAL = RoutesName.componentsIntroVue;
const titles = computed(() => ViewLibComponentsVue.select.titles);
const description = computed(() => convertService.convertStringJ5(ViewLibComponentsVue.select.description));
const props = computed(() => ViewLibComponentsVue.select.props);
const styles = computed(() => ViewLibComponentsVue.select.styles);

const options = [
  { value: "red", text: "Red" },
  { value: "green", text: "Green" },
  { value: "blue", text: "Blue" },
]

const modelValue = ref("red")

</script>

<template>
  <section class="j5v-components-select">
    <ArrowBack :route-name="ROUTE_INITIAL" />
    <section class="j5v-components-select__section j5v-components-select__section--summary section">
      <h1 class="j5v-components-select__title title">{{ titles.title }}</h1>
      <div class="j5v-components-select__container j5v-components-select__container--description container">
        <div class="selects">
          <h3>Select option: <b>{{ modelValue }}</b></h3>
          <J5VSelct :options="options" v-model="modelValue" />
        </div>
      </div>
    </section>
    <Separate></Separate>
    <section class="j5v-components-select__section j5v-components-select__section--summary section">
      <h2 class="j5v-components-select__title subtitle">{{ titles.description }}</h2>
      <div class="j5v-components-select__container j5v-components-select__container--description container"
        v-html="description"></div>
    </section>
    <Separate :is-none="true"></Separate>
    <section class="j5v-components-select__section j5v-components-select__section--summary section">
      <h2 class="j5v-components-select__title subtitle">{{ titles.props }}</h2>
      <div class="j5v-components-select__container j5v-components-select__container--description container"
        v-html="props"></div>
    </section>
    <Separate :is-none="true"></Separate>
    <section class="j5v-components-select__section j5v-components-select__section--summary section">
      <h2 class="j5v-components-select__title subtitle">{{ titles.styles }}</h2>
      <div class="j5v-components-select__container j5v-components-select__container--description container"
        v-html="styles"></div>
    </section>
    <Separate></Separate>
  </section>
</template>

<style lang="scss">
.j5v-components-select {
  width: 100%;

  .selects {
    @include Flex(column);
  }
}
</style>
