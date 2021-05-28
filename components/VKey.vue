<template>
  <div class="tags has-addons">
    <span :class="size" class="tag is-info">{{ id }}</span>
    <span :class="size" class="tag"><VIcon icon="key" /></span>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: ""
    }
  }
}
</script>