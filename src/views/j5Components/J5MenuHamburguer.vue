<script setup lang="ts">
import { computed, inject } from "vue";
import ArrowBack from "@/components/global/ArrowBack.vue";
import { RoutesName } from "@/assets/resources/language";
import { ViewLibComponents } from "@/assets/resources/language/index.js";
import { WindowInject } from "@/shared/constants/injectsKey";

const window = inject(WindowInject) as Window

const ROUTE_INITIAL = RoutesName.componentsIntro;
const titles = computed(() => ViewLibComponents.menuHamburguer.titles);
const description = computed(() => ViewLibComponents.menuHamburguer.description);
const defaultValues = computed(() => ViewLibComponents.menuHamburguer.default);
const attributes = computed(() => ViewLibComponents.menuHamburguer.attributes);
const events = computed(() => ViewLibComponents.menuHamburguer.events);

const menuOptions = [
  "Inicio",
  "Contacto",
  "Servicios",
  "Acerca de...",
]

function isOpen({ detail }: CustomEvent) {
  const state = detail?.isOpen || false
  window.document.body.setAttribute("scroll", state)
}
</script>
<template>
  <section class="j5-components-menuHamburguer">
    <ArrowBack :route-name="ROUTE_INITIAL" />
    <section class="j5-components-menuHamburguer__section j5-components-menuHamburguer__section--summary section">
      <h1 class="j5-components-menuHamburguer__title title">{{ titles.title }}</h1>
      <div
        class="j5-components-menuHamburguer__container j5-components-menuHamburguer__container--description container">
        <div class="j5-components-menuHamburguer__menuContainer">
          <j5-menu-hamburguer @isOpen="isOpen">
            <ul class="j5-components-menuHamburguer__menu">
              <li v-for="option in menuOptions" :key="option">{{ option }}</li>
            </ul>
          </j5-menu-hamburguer>
        </div>
      </div>
    </section>
    <Separate></Separate>
    <section class="j5-components-menuHamburguer__section j5-components-menuHamburguer__section--summary section">
      <h2 class="j5-components-menuHamburguer__title subtitle">{{ titles.description }}</h2>
      <div
        class="j5-components-menuHamburguer__container j5-components-menuHamburguer__container--description container"
        v-html="description"></div>
    </section>
    <Separate :is-none="true"></Separate>
    <section class="j5-components-menuHamburguer__section j5-components-menuHamburguer__section--summary section">
      <h2 class="j5-components-menuHamburguer__title subtitle">{{ titles.default }}</h2>
      <div
        class="j5-components-menuHamburguer__container j5-components-menuHamburguer__container--description container"
        v-html="defaultValues"></div>
    </section>
    <Separate></Separate>
    <section class="j5-components-menuHamburguer__section j5-components-menuHamburguer__section--summary section">
      <h2 class="j5-components-menuHamburguer__title subtitle">{{ titles.attributes }}</h2>
      <div
        class="j5-components-menuHamburguer__container j5-components-menuHamburguer__container--description container"
        v-html="attributes"></div>
    </section>
    <Separate :is-none="true"></Separate>
    <section class="j5-components-menuHamburguer__section j5-components-menuHamburguer__section--summary section">
      <h2 class="j5-components-menuHamburguer__title subtitle">{{ titles.events }}</h2>
      <div
        class="j5-components-menuHamburguer__container j5-components-menuHamburguer__container--description container"
        v-html="events"></div>
    </section>
    <Separate></Separate>
  </section>
</template>

<style lang="scss">
.j5-components-menuHamburguer {
  width: 100%;

  &__menuContainer {
    width: 300px;
    height: 420px;
    margin: auto;
    padding: 0.3em;
    @include Flex(row, flex-end, flex-start);
    position: relative;
    border: 1px solid var(--color-third);
  }

  &__menu {
    height: 100vh;
    @include Flex(column, center, center);
    margin: auto;

    & li {
      width: 80%;
      padding: 0.8em 0;
      font-size: 1.5em;
      text-align: center;
      border-bottom: 1px solid var(--color-gray, #ccc);
      list-style: none;
    }
  }
}
</style>
