<script setup lang="ts">
import { useRoot } from "@/store";
import routes from "@/router/routes";
import MenuHamburguer from "@/components/global/MenuHamburguer.vue";
import JFooter from "@/components/global/JFooter.vue";

const store = useRoot();
const options = routes.map((route) => ({ name: route.name, link: route.path }));
</script>
<template>
  <header class="header">
    <section class="header__left">
      <MenuHamburguer>
        <nav class="header__nav">
          <ul class="header__options">
            <li class="header__option" v-for="(option, key) in options" :key="key">
              <RouterLink class="header__link" :to="option.link">{{ option.name }}</RouterLink>
            </li>
          </ul>
          <JFooter class="header__footer" v-if="store.isMobile"></JFooter>
        </nav>
      </MenuHamburguer>
    </section>
    <section class="header__right"></section>
  </header>
</template>

<style lang="scss">
.header {
  display: grid;
  &__options {
    padding: 1.5em 2.5em;
    margin: auto;
    max-width: 90%;
    text-align: center;
  }
  &__option {
    font-size: 0.9375em;
    font-family: var(--font-title);
    padding: 0.6em 0;
    list-style: none;
    border-bottom: 1px solid var(--color-gray);
    &:first-child {
      border-top: 1px solid var(--color-gray);
    }
  }

  &__link {
    text-decoration: none;
  }
  &__footer {
    margin: 4em auto;
  }
  @include tabletWidth() {
    &__options {
      display: flex;
    }
    &__option {
      flex-shrink: 0;
      border: none;
      padding: 0 0.6em;
      &:first-child {
        border: none;
      }
    }
  }
}
</style>
