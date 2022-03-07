<script setup>
import Avatar from "@/components/Global/JAvatar.vue";
</script>
<template>
  <div class="banner">
    <div class="banner__back"></div>
    <div class="banner__container">
      <div class="banner__text">
        <p class="banner__txt banner__txt--one">
          Desarrollador
          <b>full stack</b>
        </p>
        <p class="banner__txt banner__txt--two">con experiencia en</p>
        <p class="banner__txt banner__txt--three">
          <b>Javascript.</b>
        </p>
      </div>
    </div>
    <Avatar class="banner__img" url="https://i.ibb.co/n020sh2/Perfil2.jpg" />
  </div>
</template>
<style lang="scss">
.banner {
  @include Flex(column, flex-start, flex-start);
  width: 100%;
  padding: $base * 2;
  position: relative;
  &__container {
    width: 100%;
    height: 100%;
  }
  &__back {
    width: 100%;
    height: 75%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to top, #49983a, $color_primary_color);
    z-index: -1;
  }
  &__txt {
    font-size: 1.8em;
    text-align: center;
    line-height: 1.3;
    color: $color_white;
    white-space: nowrap;
    overflow: hidden;
  }
  &__img {
    width: 200px;
    height: 200px;
    align-self: center;
    flex-shrink: 0;
    position: relative;
    top: 25px;
    .avatar__ico {
      color: $color_sec_color;
    }
  }
  @include pocketWidth() {
    &__txt {
      font-size: 2.2em;
    }
    &__img {
      width: 280px;
      height: 280px;
    }
  }
  @include tabletWidth() {
    padding: $base * 3;
    flex-direction: row;
    overflow: hidden;
    &__back {
      height: 100%;
      background: linear-gradient(to top, #49983a, $color_primary_color);
      transform: skewY(-15deg);
    }
    &__container {
      align-self: flex-end;
    }
    &__txt {
      width: 0;
      font-size: 2.5em;
      text-align: initial;
      line-height: initial;
      color: $color_white;
      &--one {
        $one: 390px;
        @include widthPause($one);
        animation: getNameWidthPause($one) 0s forwards, typing 2s steps(22), blink 0.6s step-end, blinkEnd 1s 2s forwards;
      }
      &--two {
        $two: 310px;
        @include widthPause($two);
        animation: getNameWidthPause($two) 0.1s 2.2s forwards, typing 2s 2.2s steps(22), blink 0.6s step-end, blinkEnd 1s 4.2s forwards;
      }
      &--three {
        $three: 180px;
        @include widthPause($three);
        animation: getNameWidthPause($three) 0.1s 4.4s forwards, typing 2s 4.4s steps(22), blink 0.6s step-end infinite;
      }
    }
    &__img {
      width: 300px;
      height: 300px;
      top: 0;
    }
  }
  @include desktopWidth() {
    &__txt {
      font-size: 3em;
      &--one {
        $one: 460px;
        @include widthPause($one);
        animation: getNameWidthPause($one) 0s forwards, typing 2s steps(22), blink 0.6s step-end, blinkEnd 1s 2s forwards;
      }
      &--two {
        $two: 360px;
        @include widthPause($two);
        animation: getNameWidthPause($two) 0.1s 2.2s forwards, typing 2s 2.2s steps(22), blink 0.6s step-end, blinkEnd 1s 4.2s forwards;
      }
      &--three {
        $three: 220px;
        @include widthPause($three);
        animation: getNameWidthPause($three) 0.1s 4.4s forwards, typing 2s 4.4s steps(22), blink 0.6s step-end infinite;
      }
    }
  }
}
</style>
