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
  @include Flex(column, center, flex-start);
  &.none {
    @include Flex(column, center, flex-end);
  }
  &__line {
    height: 0.125em;
    margin: 0.25rem 0;
    &--one {
      width: $major;
      background-color: var(--color-primary);
    }
    &--dos {
      width: $minor;
      background-color: var(--color-second);
    }
    &.none {
      &--one {
        width: $minor;
        background-color: var(--color-second);
      }
      &--dos {
        width: $major;
        background-color: var(--color-primary);
      }
    }
  }
}
</style>
