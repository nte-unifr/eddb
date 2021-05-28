import _ from "lodash"
import mapping from "~/Repositories/Drones/MapDrone.js"
import DatesBee from "~/Repositories/Bees/DatesBee.js"
import ImagesBee from "~/Repositories/Bees/ImagesBee.js"
import InfosBee from "~/Repositories/Bees/InfosBee.js"
import PropsBee from "~/Repositories/Bees/PropsBee.js"
import TagsBee from "~/Repositories/Bees/TagsBee.js"

export default (config, dateFormat) => ({
  buildItems(items) {
    return _.map(items, this.buildItem)
  },
  buildItem(item) {
    const fields = mapping(item, config.fields)
    return {
      id: item.id,
      title: _.find(fields, { 'type': 'title' }).val,
      description: _.find(fields, { 'type': 'description' }).val,
      properties: PropsBee(fields),
      informations: InfosBee(fields),
      dates: DatesBee(fields, dateFormat),
      images: ImagesBee(fields),
      tags: TagsBee(fields)
    }
  }
})