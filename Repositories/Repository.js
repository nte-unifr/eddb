import ItemRepository from '~/Repositories/ItemRepository'

export default ($http, config) => ({
  item: ItemRepository($http, config)
})