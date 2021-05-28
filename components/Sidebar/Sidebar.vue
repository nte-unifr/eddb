<template>
  <div>
    <SidebarSortOrder />
    <SidebarGridConfig />
    <SidebarSearch />
    <SidebarFilters />
    <SidebarPagination />
  </div>
</template>

<style lang="scss" scoped>
  div {
    position: sticky;
    top: 15px;
    ::v-deep .card-footer-item {
      padding: 0.4rem;
    }
  }
</style>