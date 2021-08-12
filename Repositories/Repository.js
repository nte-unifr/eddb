import ItemRepository from '~/repositories/ItemRepository'

export default ($http, config) => ({
  item: ItemRepository($http, config)
})