<script setup lang="ts">
import { computed } from "vue";
import ArrowBack from "@/components/global/ArrowBack.vue";
import { RoutesName } from "@/assets/resources/language";
import { ViewLibComponents } from "@/assets/resources/language/index.js";

const ROUTE_INITIAL = RoutesName.componentsIntro;
const titles = computed(() => ViewLibComponents.collapse.titles);
const description = computed(() => ViewLibComponents.collapse.description);
const defaultValues = computed(() => ViewLibComponents.collapse.default);
const attributes = computed(() => ViewLibComponents.collapse.attributes);
const events = computed(() => ViewLibComponents.collapse.events);
</script>

<template>
  <section class="j5-components-collapse">
    <ArrowBack :route-name="ROUTE_INITIAL" />
    <Separate :is-none="true"></Separate>
    <section class="j5-components-collapse__section j5-components-collapse__section--summary section">
      <h1 class="j5-components-collapse__title title">{{ titles.title }}</h1>
      <div class="j5-components-collapse__container j5-components-collapse__container--description container">
          <j5-collapse class="j5-components-collapse__demo card">
            <section slot="summary">
              <div class="container">
                <h3>Demostración (dar clic)</h3>
              </div>
            </section>
            <section slot="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at commodi error aut architecto voluptas
                aperiam fugiat accusamus iste rerum porro velit vel cum, eveniet exercitationem quos iusto omnis
                repellat.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at commodi error aut architecto voluptas
                aperiam fugiat accusamus iste rerum porro velit vel cum, eveniet exercitationem quos iusto omnis
                repellat.
              </p>
            </section>
          </j5-collapse>
      </div>
    </section>
    <Separate></Separate>
    <section class="j5-components-collapse__section j5-components-collapse__section--summary section">
      <h2 class="j5-components-collapse__title subtitle">{{ titles.description }}</h2>
      <div class="j5-components-collapse__container j5-components-collapse__container--description container"
        v-html="description"></div>
    </section>
    <Separate :is-none="true"></Separate>
    <section class="j5-components-collapse__section j5-components-collapse__section--summary section">
      <h2 class="j5-components-collapse__title subtitle">{{ titles.default }}</h2>
      <div class="j5-components-collapse__container j5-components-collapse__container--description container"
        v-html="defaultValues"></div>
    </section>
    <Separate></Separate>
    <section class="j5-components-collapse__section j5-components-collapse__section--summary section">
      <h2 class="j5-components-collapse__title subtitle">{{ titles.attributes }}</h2>
      <div class="j5-components-collapse__container j5-components-collapse__container--description container"
        v-html="attributes"></div>
    </section>
    <Separate :is-none="true"></Separate>
    <section class="j5-components-collapse__section j5-components-collapse__section--summary section">
      <h2 class="j5-components-collapse__title subtitle">{{ titles.events }}</h2>
      <div class="j5-components-collapse__container j5-components-collapse__container--description container"
        v-html="events"></div>
    </section>
    <Separate></Separate>
  </section>
</template>

<style lang="scss">
.j5-components-collapse {
  width: 100%;

  &__demo {
    margin: auto;
    width: 300px;
    padding-top: 0;
    padding-bottom: 0.5em;
    border-top: 8px solid var(--color-third);
    border-top-left-radius: 0.2em;
    border-top-right-radius: 0.2em;
  }

}
</style>
