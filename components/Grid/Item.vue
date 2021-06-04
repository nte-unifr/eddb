<template>
  <div class="column is-full-mobile is-half-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
    <div class="card">
      <div class="card-image">
        <GridItemImage :image="item.images[0]" />
      </div>
      <div class="card-content">
        <GridItemTitle :id="item.id" :title="item.title" />
        <VKey :id="item.id" />
        <div class="mb-4">
          <GridItemDescription :description="item.description" />
        </div>
        <GridItemTags :tags="item.tags" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>