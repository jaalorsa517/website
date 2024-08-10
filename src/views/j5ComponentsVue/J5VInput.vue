<script setup lang="ts">
import { computed } from "vue";
import { J5VInput } from "@jaalorsa/j5-components-vue"
import ArrowBack from "@/components/global/ArrowBack.vue";
import { RoutesName } from "@/assets/resources/language";
import { ViewLibComponentsVue } from "@/assets/resources/language/index.js";

const ROUTE_INITIAL = RoutesName.componentsIntroVue;
const titles = computed(() => ViewLibComponentsVue.input.titles);
const description = computed(() => ViewLibComponentsVue.input.description);
const props = computed(() => ViewLibComponentsVue.input.props);
const styles = computed(() => ViewLibComponentsVue.input.styles);

</script>

<template>
  <section class="j5v-components-input">
    <ArrowBack :route-name="ROUTE_INITIAL" />
    <section class="j5v-components-input__section j5v-components-input__section--summary section">
      <h1 class="j5v-components-input__title title">{{ titles.title }}</h1>
      <div class="j5v-components-input__container j5v-components-input__container--demo container">
        <J5VInput type="number" placeholder="number"  />
        <J5VInput type="text" placeholder="text" :hasFocus="true" initialValue="123" />
        <J5VInput type="tel" placeholder="tel(disable)" :hasFocus="true" :disabled="true" />
        <J5VInput type="email" placeholder="email(focus-blur)" :hasFocusEvent="true" :hasBlurEvent="true" />
      </div>
    </section>
    <Separate></Separate>
    <section class="j5v-components-input__section j5v-components-input__section--summary section">
      <h2 class="j5v-components-input__title subtitle">{{ titles.description }}</h2>
      <div class="j5v-components-input__container j5v-components-input__container--description container"
        v-html="description"></div>
    </section>
    <Separate :is-none="true"></Separate>
    <section class="j5v-components-input__section j5v-components-input__section--summary section">
      <h2 class="j5v-components-input__title subtitle">{{ titles.props }}</h2>
      <div class="j5v-components-input__container j5v-components-input__container--description container" v-html="props">
      </div>
    </section>
    <Separate :is-none="true"></Separate>
    <section class="j5v-components-input__section j5v-components-input__section--summary section">
      <h2 class="j5v-components-input__title subtitle">{{ titles.styles }}</h2>
      <div class="j5v-components-input__container j5v-components-input__container--description container" v-html="styles">
      </div>
    </section>
    <Separate></Separate>
  </section>
</template>

<style lang="scss">
.j5v-components-input {
  width: 100%;

  &__container {
    &--demo {
      @include Flex(column, center, center);
      gap: 1em;
    }
  }

  @include desktopWidth() {
    &__container {
      &--demo {
        @include Flex(row, center, flex-start);
      }
    }
  }
}
</style>
