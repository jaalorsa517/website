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
  $major: 95%;
  $minor: 85%;
  width: 100%;
  @include Flex(column, center, flex-start);
  &.none {
    @include Flex(column, center, flex-end);
  }
  &__line {
    height: 0.125em;
    margin: 0.25rem 0;
    animation: grownWidth 1.5s ease-in-out;
    &--one {
      width: $minor;
      background-color: var(--color-second);
      &.none {
        width: $major;
        background-color: var(--color-primary);
      }
    }
    &--dos {
      width: $major;
      background-color: var(--color-primary);
      &.none {
        width: $minor;
        background-color: var(--color-second);
      }
    }
  }
}
</style>
