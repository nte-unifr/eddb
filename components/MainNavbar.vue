<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://unifr.ch">
          <img src="~/assets/images/logo-unifr.jpg" />
        </a>

        <div class="navbar-item">
          <div>
            <h1 class="title is-4">{{ title }}</h1>
            <p class="subtitle is-6">{{ subtitle }}</p>
          </div>
        </div>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
        </div>

        <div class="navbar-end">
          <a class="navbar-item" @click="displayInfo">
            <VIcon icon="database" />
          </a>
          <div class="navbar-item">
            <div class="buttons">
              <NuxtLink to="/about" class="button is-primary">
                <strong>About the project</strong>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    title () {
      return this.$store.state.title
    },
    subtitle () {
      return this.$store.state.subtitle
    }
  },
  methods: {
    displayInfo () {
      this.$store.commit('setInfo', true)
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar-item img {
    max-height:2.8rem;
  }
</style>