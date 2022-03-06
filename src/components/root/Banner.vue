<script setup></script>
<template>
  <div class="banner">
    <div class="banner__container">
      <div class="banner__back"></div>
      <div class="banner__text">
        <p class="banner__txt banner__txt--one">Desarrollador full stack</p>
        <p class="banner__txt banner__txt--two">con experiencia en</p>
        <p class="banner__txt banner__txt--three">Javascript.</p>
      </div>
    </div>
    <div class="banner__img"></div>
  </div>
</template>
<style lang="scss">
.banner {
  width: 100vw;
  height: 300px;
  &__container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  &__back {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: $color_primary_color;
    transform: skewY(5deg);
    z-index: -1;
  }
  &__txt {
    width: 0px;
    color: $color_white;
    font-size: 1.8em;
    white-space: nowrap;
    overflow: hidden;
    &--one {
      @include widthPause(272px);
      animation: getName(272px) 0s forwards, typing 2s steps(22), blink 0.6s step-end, blinkEnd 1s 2s forwards;
    }
    &--two {
      @include widthPause(220px);
      animation: getName(220px) 0.1s 2.2s forwards, typing 2s 2.2s steps(22), blink 0.6s step-end, blinkEnd 1s 4.2s forwards;
    }
    &--three {
      @include widthPause(125px);
      animation: getName(125px) 0.1s 4.4s forwards, typing 2s 4.4s steps(22), blink 0.6s step-end infinite;
    }
  }
}
</style>
