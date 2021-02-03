<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <div class="container box mt-6">
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li class="is-active"><a href="#">{{ page }}</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    page: ''
  }
}
</script>