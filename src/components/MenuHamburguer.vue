<script setup>
import { ref } from "vue";
import logo from "@/assets/logo.png";
import { useRoot } from "@/store";

const store = useRoot();
const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>
<template>
  <section class="hamburguer">
    <div class="hamburguer__container">
      <div class="hamburguer__left">
        <div class="hamburguer__logo">
          <img :src="logo" alt="logo" />
        </div>
        <Transition>
          <div class="hamburguer__title" v-if="isOpen || !store.isMobile">jaalorsa</div>
        </Transition>
      </div>
      <div class="hamburguer__rigth">
        <div class="hamburguer__menu" @click="toggleMenu" v-if="store.isMobile">
          <div :class="['hamburguer__line', 'hamburguer__line--uno', isOpen ? 'active' : '']"></div>
          <div :class="['hamburguer__line', 'hamburguer__line--dos', isOpen ? 'active' : '']"></div>
          <div :class="['hamburguer__line', 'hamburguer__line--tres', isOpen ? 'active' : '']"></div>
        </div>
      </div>
    </div>
    <Transition>
      <section class="hamburguer__content" v-if="isOpen || !store.isMobile">
        <slot></slot>
      </section>
    </Transition>
  </section>
</template>
<style lang="scss">
.hamburguer {
  &__container {
    @include Flex(row, space-between);
    height: $height_fixed;
    padding: 0.5em 0.8em;
    border-bottom: 1px solid $color_gray;
    position: relative;
    z-index: 1001;
  }
  &__menu {
    font-size: $font_size_base;
    text-align: end;
    cursor: pointer;
  }
  &__left {
    @include Flex(row, flex-start);
  }
  &__logo {
    width: 38px;
    height: 38px;
    & img {
      width: 100%;
      height: 100%;
    }
  }
  &__title {
    margin: 0 0.5em;
    font-family: $font_cursive;
    font-size: $font_size_base;
    line-height: 25px;
    letter-spacing: 0.02em;
  }

  &__line {
    height: 0.125em;
    margin: 0.125em 0;
    border-radius: 0.0625em;
    background-color: $color_font_dark;
    transition: transform 600ms ease-in-out, opacity 800ms ease-in-out;
    &--uno {
      width: 1.25em;
      &.active {
        transform: rotate(-45deg) translate(-25%, 50%);
      }
    }
    &--dos {
      width: 0.625em;
      &.active {
        opacity: 0;
      }
    }
    &--tres {
      width: 0.9375em;
      &.active {
        width: 1.25em;
        transform: rotate(45deg) translate(-20%, -40%);
      }
    }
  }

  &__content {
    position: fixed;
    width: 100vw;
    height: calc(100vh - 3.4375em);
    font-size: $font_size_base;
    top: 3.4375em;
    left: 0;
    background-color: $color_white;
    z-index: 1000;
  }

  @include tabletWidth() {
    @include Flex(row, space-between);
    height: 3.4375em;
    padding: 0.5em 0.8em;
    border-bottom: 1px solid $color_gray;
    position: relative;
    &__container {
      display: initial;
      height: auto;
      padding: inherit;
      border-bottom: none;
      position: static;
      z-index: 1;
    }
    &__content {
      position: static;
      width: auto;
      height: auto;
      font-size: $font_size_base;
      top: unset;
      left: unset;
      background-color: transparent;
      z-index: 1;
    }
  }
}
</style>