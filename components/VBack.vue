<template>
  <div class="mt-6">
    <NuxtLink to="/">
      <span class="icon-text">
        <span class="icon">
          <VIcon icon="arrow-left" />
        </span>
        <span>{{ title }}</span>
      </span>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Back to results'
    }
  }
}
</script>