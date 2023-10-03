<script setup>
import { computed, ref } from "vue";
import { J5VAlert } from "@jaalorsa/j5-components-vue"
import ArrowBack from "@/components/global/ArrowBack.vue";
import { RoutesName } from "@/assets/resources/language";
import { ViewLibComponentsVue } from "@/assets/resources/language/index.js";
import { convertStringJ5 } from "@/services/converter";

const ROUTE_INITIAL = RoutesName.componentsIntroVue;
const titles = computed(() => ViewLibComponentsVue.alert.titles);
const description = computed(() => convertStringJ5(ViewLibComponentsVue.alert.description));
const propsValue = computed(() => convertStringJ5(ViewLibComponentsVue.alert.props));
const slotsValue = computed(() => convertStringJ5(ViewLibComponentsVue.alert.slots));
const events = computed(() => ViewLibComponentsVue.alert.events);
const styles = computed(() => ViewLibComponentsVue.alert.styles);

const isShowProps = ref(false)
const isShowSlots = ref(false)

</script>

<template>
  <section class="j5vcomponents-alert">
    <ArrowBack :route-name="ROUTE_INITIAL" />
    <section class="j5vcomponents-alert__section j5vcomponents-alert__section--summary section">
      <h1 class="j5vcomponents-alert__title title">{{ titles.title }}</h1>
      <div class="j5vcomponents-alert__container j5vcomponents-alert__container--description container">
        <div class="alert__container" flex-center=row>
          <button @click="isShowProps = true">Mostrar Alerta Opción Props</button>
          <button @click="isShowSlots = true">Mostrar Alerta Opción Slots</button>
        </div>
        <J5VAlert v-if="isShowSlots">
          <template v-slot:header>
            <h2>Titulo <i>Slots</i></h2>
          </template>
          <template v-slot:body>
            <p>Texto inyectado a través de <b>slots</b>.</p>
          </template>
          <template v-slot:footer>
            <div class="alert__container alert__container--btn" flex-center=row>
              <button @click="isShowSlots = false">Aprobar</button>
              <button @click="isShowSlots = false">Denegar</button>
            </div>
          </template>
        </J5VAlert>
        <J5VAlert v-if="isShowProps" title="Titulo Props" body="Texto inyectado a través de props." btnOkText="Ok"
          :hasBtnCancel="true" @confirm="isShowProps = false">
        </J5VAlert>
      </div>
    </section>
    <Separate></Separate>
    <section class="j5vcomponents-alert__section j5vcomponents-alert__section--summary section">
      <h2 class="j5vcomponents-alert__title subtitle">{{ titles.description }}</h2>
      <div class="j5vcomponents-alert__container j5vcomponents-alert__container--description container"
        v-html="description"></div>
    </section>
    <Separate :is-none="true"></Separate>
    <section class="j5vcomponents-alert__section j5vcomponents-alert__section--summary section">
      <h2 class="j5vcomponents-alert__title subtitle">{{ titles.props }}</h2>
      <div class="j5vcomponents-alert__container j5vcomponents-alert__container--description container"
        v-html="propsValue"></div>
    </section>
    <Separate></Separate>
    <section class="j5vcomponents-alert__section j5vcomponents-alert__section--summary section">
      <h2 class="j5vcomponents-alert__title subtitle">{{ titles.slots }}</h2>
      <div class="j5vcomponents-alert__container j5vcomponents-alert__container--description container"
        v-html="slotsValue"></div>
    </section>
    <Separate :is-none="true"></Separate>
    <section class="j5vcomponents-alert__section j5vcomponents-alert__section--summary section">
      <h2 class="j5vcomponents-alert__title subtitle">{{ titles.events }}</h2>
      <div class="j5vcomponents-alert__container j5vcomponents-alert__container--description container" v-html="events">
      </div>
    </section>
    <Separate></Separate>
    <section class="j5vcomponents-alert__section j5vcomponents-alert__section--summary section">
      <h2 class="j5vcomponents-alert__title subtitle">{{ titles.styles }}</h2>
      <div class="j5vcomponents-alert__container j5vcomponents-alert__container--description container" v-html="styles">
      </div>
    </section>
    <Separate :is-none="true"></Separate>
  </section>
</template>

<style lang="scss">
.j5vcomponents-alert {
  width: 100%;

  .alert {
    @include Flex(column, center, center);

    &__container {
      flex-direction: column;

      &--btn {
        flex-direction: row;
      }

      gap: 1em;
    }

    @include tabletWidth() {
      &__container {
        flex-direction: row;
      }
    }
  }
}
</style>
