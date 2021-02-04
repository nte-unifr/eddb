<template>
  <svg
    :width="width"
    :height="height"
    class="feather">
    <use :xlink:href="require('@/assets/svg/feather-sprite.svg') + `#${icon}`"></use>
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'circle'
    },
    width: {
      type: Number,
      default: 24
    },
    height: {
      type: Number,
      default: 24
    }
  }
}
</script>

<style lang="scss" scoped>
  .feather {
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
</style>