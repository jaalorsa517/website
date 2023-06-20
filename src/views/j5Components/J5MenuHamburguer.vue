<script setup>
import ArrowBack from "@/components/global/ArrowBack.vue";
import { RoutesName } from "@/assets/resources/language";

const ROUTE_INITIAL = RoutesName.componentsIntro;
</script>
<template>
  <section class="j5-menuHamburguer">
    <ArrowBack :route-name="ROUTE_INITIAL" />
    <h1 class="j5-menuHamburguer__title title">{{ RoutesName.componentsMenuHamburguer }}</h1>
    <section class="j5-menuHamburguer__section section"></section>
  </section>
</template>

<style lang="scss">
.j5-menuHamburguer {
  width: 100%;
}
</style>
