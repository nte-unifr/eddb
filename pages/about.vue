<template>
  <article class="container">
    <VBack title="Back to database" />
    <section class="section">
      <article class="message is-dark">
        <div class="message-body">
          <div class="columns">
            <div class="column">
              <nuxt-content :document="about" />
              <a href="https://www.unifr.ch/nte/fr/contact.html" class="mt-2 button is-primary">Request an EDDB</a>
            </div>
            <div class="column is-narrow">
              <figure class="image logo-eddb">
                <img src="~/assets/images/logo-eddb.png" />
              </figure>
            </div>
          </div>
        </div>
      </article>
    </section>
    <section class="section">
      <h1 class="title">{{ project }}</h1>
      <h2 class="subtitle">About the project</h2>
      <div class="content">
        <nuxt-content :document="aboutProject" />
      </div>
      <div class="columns">
        <div class="column">
          <figure class="image erc">
            <img src="~/assets/images/logo-erc.png" />
          </figure>
        </div>
        <div class="column fns">
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  async asyncData({ $config, $content }) {
    const project = $config.project
    const about = await $content('about').fetch()
    const aboutProject = await $content(`${project}-about`).fetch()

    return {
      project, about, aboutProject
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    text-transform: capitalize;
  }
  .logo-eddb {
    width: 200px;
    height: 100px;
  }
  .erc,.fns img {
    width: 50%;
  }
</style>