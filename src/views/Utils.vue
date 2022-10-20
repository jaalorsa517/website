<script setup>
import Separate from "@/components/global/Separate.vue";
import { useRoot } from "@/store";
import { onBeforeUnmount, onMounted } from "vue";

const store = useRoot();

onMounted(() => {
  const jsonTransform = document.querySelector(".utils__wcJsonTrasnform");
  if (!jsonTransform && store.jsonTransform) {
    const container = document.querySelector(".utils__jsonTransform");
    container.appendChild(store.jsonTransform);
    store.$patch({ jsonTransform: null });
  }
});
onBeforeUnmount(() => {
  const jsonTransform = document.querySelector(".utils__wcJsonTrasnform");
  if (jsonTransform) {
    store.$patch({ jsonTransform });
    jsonTransform.remove();
  }
});
</script>

<template>
  <section class="utils">
    <Separate></Separate>
    <h1 class="utils__title">Utilidades</h1>
    <div class="utils__container">
      <h2 class="utils__subtitle">Formateador JSON</h2>
      <div class="utils__jsonTransform">
        <j5-json-transform class="utils__wcJsonTrasnform"></j5-json-transform>
      </div>
    </div>
    <Separate :is-none="true"></Separate>
  </section>
</template>
<style lang="scss">
.utils {
  @include Flex(column, center, center);
  margin: auto;
  max-width: $max-width;
  &__subtitle {
    padding: 1em 0;
  }
  &__jsonTransform {
    min-width: 90vw;
    @include Flex(column, center, center);
  }
  &__wcJsonTrasnform {
    width: 100%;
    height: calc(75vh - ($height_fixed * 2));
    --color_primary: var(--color-third);
    --color_font: var(--color-font-dark);
    --color_font_light: var(--color-font-light);
    --color_popup: var(--color-font-dark);
    --color_popup_font: var(--color-font-light);
    --font-size: var(--font-size);
    --font-family: var(--font-principal);
    button {
      @extend .button;
    }
  }
  @include desktopWidth() {
    &__jsonTransform {
      min-width: unset;
      width: $max-width;
    }
  }
}
</style>
