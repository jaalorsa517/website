<script setup lang="ts">
import { J5VIcons } from "@jaalorsa/j5-components-vue"
import { useRouter } from "vue-router";
import { RoutesName } from "@/assets/resources/language";

const props = defineProps({
  text: { type: String, default: "Regresar" },
  routeName: { type: String, default: RoutesName.inicio },
});

const router = useRouter()

function onClick() {
  router.push({ name: props.routeName });
}
</script>

<template>
  <section class="arrowBack__goBack" @click="onClick">
    <J5VIcons name="arrow_back" />
    <span class="arrowBack__textBack">{{ props.text }}</span>
  </section>
</template>

<style lang="scss">
.arrowBack {
  &__goBack,
  &__arrow {
    display: flex;
    align-items: center;
  }

  &__arrow {
    justify-content: center;
    width: 1em;
    height: 1em;
  }

  &__goBack {
    cursor: pointer;
    width: fit-content;
    padding: 0.5em;
    font-size: 0.9em;
  }

  &__textBack {
    margin: 0 0.3em;
    position: relative;
    top: -1px;
  }
}
</style>
