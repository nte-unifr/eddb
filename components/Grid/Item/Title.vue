<template>
  <p class="title is-5">
    <NuxtLink :to="'/item/' + id">
      {{ title }}
    </NuxtLink>
  </p>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>