<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState({
      title: state => state.item.item.title
    })
  }
}
</script>