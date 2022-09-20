<script setup>
import MenuHamburguer from "@/components/MenuHamburguer.vue";
import JFooter from "@/components/JFooter.vue";
import { useRoot } from "@/store";

const store = useRoot();

const options = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
</script>
<template>
  <header class="header">
    <section class="header__left">
      <MenuHamburguer>
        <nav class="header__nav">
          <ul class="header__options">
            <li class="header__option" v-for="(option, key) in options" :key="key">
              <span>{{ option.name }}</span>
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
    font-family: $font_title;
    padding: 0.6em 0;
    list-style: none;
    border-bottom: 1px solid $color_gray;
    &:first-child {
      border-top: 1px solid $color_gray;
    }
  }
  &__footer {
    margin: 4em auto;
  }
  @include tabletWidth() {
    &__options {
      display: flex;
    }
    &__option {
      border: none;
      padding: 0 0.6em;
      &:first-child {
        border: none;
      }
    }
  }
}
</style>
