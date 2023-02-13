<script setup>
import { ref } from "vue";
import logo from "@/assets/logo.png";
import { useRoot } from "@/store";

const store = useRoot();
const isOpen = ref(false);
const randomMinMax = (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1)) + min;
const animations = ["fade_in_out", "slide_in_out_1", "slide_in_out_2", "slide_in_out_3", "slide_in_out_4"];
const index = randomMinMax(0, animations.length - 1);

function onIsOpen(event) {
  isOpen.value = event?.detail?.isOpen;
  if (isOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
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
        <j5-menu-hamburguer
          class="hamburguer__menuMobile"
          :animation="animations[index]"
          @isOpen="onIsOpen"
          v-if="store.isMobile"
        >
          <slot></slot>
        </j5-menu-hamburguer>
      </div>
    </div>
    <Transition>
      <section class="hamburguer__content" v-if="!store.isMobile">
        <slot></slot>
      </section>
    </Transition>
  </section>
</template>
<style lang="scss">
.hamburguer {
  &__menuMobile {
    font-size: var(--font-size);
    text-align: end;
    --color: var(--color-font-dark);
    --colorActive: var(--color-font-dark);
    --menuPositionTop: 3.4375em;
    --menuHeight: calc(100vh - 3.4375em);
    --menuBackground: var(--color-white);
    .j5-menu-hamburguer__menu .j5-menu-hamburguer__line {
      height: 0.125em;
      margin: 0.125em 0;
      border-radius: 0.0625em;
      &--uno {
        width: 1.25em;
        &.active {
          transform: rotate(-45deg) translate(-25%, 50%);
        }
      }
      &--dos {
        width: 0.625em;
      }
      &--tres {
        width: 0.9375em;
        &.active {
          width: 1.25em;
          transform: rotate(45deg) translate(-20%, -40%);
        }
      }
    }
  }
  &__container {
    @include Flex(row, space-between);
    height: $height_fixed;
    padding: 0.5em 0.8em;
    border-bottom: 1px solid var(--color-gray);
    position: relative;
    z-index: 1001;
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
    font-family: var(--font-cursive);
    font-size: var(--font-size);
    line-height: 25px;
    letter-spacing: 0.02em;
  }

  &__content {
    position: fixed;
    width: 100vw;
    height: calc(100vh - 3.4375em);
    font-size: var(--font-size);
    top: 3.4375em;
    left: 0;
    background-color: var(--color-white);
    z-index: 1000;
  }

  @include tabletWidth() {
    @include Flex(row, space-between);
    height: 3.4375em;
    padding: 0.5em 0.8em;
    border-bottom: 1px solid var(--color-gray);
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
      font-size: var(--font-size);
      top: unset;
      left: unset;
      background-color: transparent;
      z-index: 1;
    }
  }
}
</style>
