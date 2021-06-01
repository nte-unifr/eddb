<template>
  <table class="table is-fullwidth is-bordered is-striped">
    <tbody>
      <tr v-if="dates[0] || dates[1]">
        <td><strong>Datation</strong></td>
        <td>
          <span>{{ dates[0] }}</span>
          <span v-if="dates[1]">&nbsp;<VIcon icon="arrow-right" :width="12" :height="12" />&nbsp;</span>
          <span v-if="dates[1]">{{ dates[1] }}</span>
        </td>
      </tr>
      <tr v-for="(property, index) in properties" :key="`property-${index}`">
        <td><strong>{{ property.key }}</strong></td>
        <td>{{ property.value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState('item', {
      dates: state => state.item.dates,
      properties: state => state.item.properties
    })
  }
}
</script>