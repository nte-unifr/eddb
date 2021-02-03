<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">EDDB</p>
        <button class="delete" aria-label="close" @click="closeInfo"></button>
      </header>
      <section class="modal-card-body">
        <figure class="image p-4 mb-2">
          <img src="~/assets/images/logo-eddb.png" />
        </figure>
        <div class="block">
          <em>EDDB</em> ou <em>Educational Databases</em> est un projet du Centre NTE permettant aux enseignants et aux chercheurs de mettre en place rapidement des bases de données pour la recherche et l'enseignement. 
        </div>
        <a href="https://www3.unifr.ch/nte/fr/contact.html" class="button is-primary is-fullwidth">Demander une EDDB</a>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isActive() {
      return this.$store.state.info
    }
  },
  methods: {
    closeInfo() {
      this.$store.commit('setInfo', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal-card {
    width: 400px;
    .img {
      width: 300px;
    }
  }
</style>