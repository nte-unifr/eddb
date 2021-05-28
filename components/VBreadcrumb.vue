<template>
  <nav class="breadcrumb box is-small" aria-label="breadcrumbs">
    <ul>
      <li><NuxtLink to="/">{{ sub }}</NuxtLink></li>
      <li class="is-active"><a href="#">{{ page }}</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    page: '',
    sub: ''
  }
}
</script>

<style lang="scss" scoped>
  .breadcrumb {
    padding: 0.7rem;
    box-shadow: none;
    border-radius: 0;
  }
</style>