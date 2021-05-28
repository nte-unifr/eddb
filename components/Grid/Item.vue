<template>
  <div class="column is-full-mobile is-half-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
    <div class="card">
      <div class="card-image">
        <GridItemImage image="" />
      </div>
      <div class="card-content">
        <GridItemTitle :id="id" :title="title" />
        <VKey :id="id" />
        <div class="mb-4">
          <GridItemDescription :description="description" />
        </div>
        <GridItemTags :tags="tags" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>