<template>
  <div>
    <TheQuickAccess />
    <TheNavbar />
    <article class="container">
      <section class="hero is-warning">
        <div class="hero-body">
          <p class="title">An error occurred</p>
          <p class="subtitle" v-if="error.statusCode === 404">
            404 : Page not found
          </p>
        </div>
      </section>
      <VBack />
    </article>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'blank'
  }
</script>

<style lang="scss" scoped>
  .hero {
    margin-top: 5rem;
  }
</style>