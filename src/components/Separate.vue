<script setup>
const { isNone } = defineProps({ isNone: { type: Boolean, default: false } });
</script>
<template>
  <div :class="['separate', isNone ? 'none' : '']">
    <div :class="['separate__line', 'separate__line--one', isNone ? 'none' : '']"></div>
    <div :class="['separate__line', 'separate__line--dos', isNone ? 'none' : '']"></div>
  </div>
</template>
<style lang="scss">
.separate {
  @include Flex(column, center, flex-start);
  &.none {
    @include Flex(column, center, flex-end);
  }
  &__line {
    height: 0.125em;
    margin: 0.25rem 0;
    &--one {
      width: 97vw;
      background-color: $color_sec_color;
    }
    &--dos {
      width: 88vw;
      background-color: $color_third_color;
    }
    &.none {
      &--one {
        width: 88vw;
        background-color: $color_third_color;
      }
      &--dos {
        width: 97vw;
        background-color: $color_sec_color;
      }
    }
  }
}
</style>
