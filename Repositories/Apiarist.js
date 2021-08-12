import ApiItem from '~/repositories/ApiItem'

export default (config) => ({
  item: ApiItem(config.item, config.dateFormat)
})