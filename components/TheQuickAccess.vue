<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background" @click="hide"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Quick Access</p>
        <button class="delete" aria-label="close" @click="hide"></button>
      </header>
      <section class="modal-card-body">
        <div class="notification is-danger" :class="{ 'is-hidden': !error }">
          Key must be a number
        </div>
        <div class="block">
          Access item by key
        </div>
        <form @submit="go">
          <p class="control has-icons-left mb-2">
            <input class="input is-medium" type="text" placeholder="" v-model="key">
            <span class="icon is-small is-left">
              <VIcon icon="key" />
            </span>
          </p>
          <button class="button is-primary is-fullwidth">
            <span>Access</span>
            <span class="icon">
              <VIcon icon="log-in" :width=20 :height=20 />
            </span>
          </button>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      key: "",
      error: false
    }
  },
  computed: {
    ...mapState('config/quickaccess', ['isActive'])
  },
  methods: {
    ...mapActions('config/quickaccess', ['display', 'hide']),
    go (e) {
      if (!/^\d+$/.test(this.key)) {
        this.error = true
      } else {
        this.error = false
        this.hide()
        this.$router.push({ path: `/item/${this.key}` })
        this.key = ''
      }
      e.preventDefault()
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal-card {
    width: 300px;
  }
</style>