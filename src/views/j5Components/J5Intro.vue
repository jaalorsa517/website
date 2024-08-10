<script setup lang="ts">
import { computed, inject } from "vue";
import { ViewLibComponents } from "@/assets/resources/language/index.js";
import routes from "@/plugins/router/routes";
import { RoutesName } from "@/assets/resources/language";
import { ConverterServiceInject } from "@/shared/constants/injectsKey";
import { IConverter } from "@/shared/models/interfaces/IConverter";

const convertService = inject<IConverter>(ConverterServiceInject) as IConverter

const titles = computed(() => ViewLibComponents.intro.titles);
const description = computed(() => ViewLibComponents.intro.description);
const features = computed(() => convertService.convertStringJ5(ViewLibComponents.intro.features));
const links = computed(() => {
  const routeTarget = routes.find((route) => route.name === RoutesName.components);
  if (!routeTarget) return [];
  return routeTarget.children
    ?.filter((child) => child.name !== RoutesName.componentsIntro)
    .map((child) => ({
      routeName: child.name,
      path: child.path,
    }));
});
</script>

<template>
  <section class="j5-components-intro">
    <Separate :is-none="true"></Separate>
    <section class="j5-components-intro__section j5-components-intro__section--summary section">
      <h1 class="j5-components-intro__title title">{{ titles.title }}</h1>
      <div class="j5-components-intro__container j5-components-intro__container--description container"
        v-html="description"></div>
    </section>
    <Separate></Separate>
    <section class="j5-components-intro__section section">
      <h2 class="j5-components-intro__subtitle subtitle">{{ titles.components }}</h2>
      <div class="j5-components-intro__container container">
        <ul class="j5-components-intro__componentsLink">
          <li class="j5-components-intro__componentLink" v-for="(link, key) in links" :key="key">
            <RouterLink :to="{ name: link.routeName }">{{ link.routeName }}</RouterLink>
          </li>
        </ul>
      </div>
    </section>
    <Separate :is-none="true"></Separate>
    <section class="j5-components-intro__section j5-components-intro__section--instruction section">
      <h2 class="j5-components-intro__subtitle subtitle">{{ titles.instructions }}</h2>
      <div class="j5-components-intro__container j5-components-intro__container--features container" v-html="features">
      </div>
    </section>
    <Separate></Separate>
  </section>
</template>

<style lang="scss">
.j5-components-intro {
  width: 100%;

  &__section &__container &__componentsLink {
    list-style: none;
  }

  &__section &__container &__componentLink {
    margin: 0;
  }

  &__container {
    &--feaatures {
      >p {
        margin: 0.5em 0;
      }
    }
  }

  &__componentsLink {
    @include Flex(column, center, center);
    flex-wrap: wrap;
  }

  &__componentLink {
    padding: 0.2em;
    white-space: nowrap;
    cursor: pointer;
  }

  @include pocketWidth() {
    &__componentsLink {
      @include Flex(row, center, center);
    }

    &__section &__container &__componentLink {
      margin: 0 0.5em;
    }
  }

  @include tabletWidth() {}
}
</style>
