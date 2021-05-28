import ApiItem from '~/Repositories/ApiItem'

export default (config) => ({
  item: ApiItem(config.item, config.dateFormat)
})