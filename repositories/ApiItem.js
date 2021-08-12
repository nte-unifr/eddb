import _ from "lodash"
import mapping from "~/repositories/Drones/MapDrone.js"
import DescriptionBee from "~/repositories/Bees/DescriptionBee.js"
import SummaryBee from "~/repositories/Bees/SummaryBee.js"
import DatesBee from "~/repositories/Bees/DatesBee.js"
import ImagesBee from "~/repositories/Bees/ImagesBee.js"
import InfosBee from "~/repositories/Bees/InfosBee.js"
import PropsBee from "~/repositories/Bees/PropsBee.js"
import TagsBee from "~/repositories/Bees/TagsBee.js"

export default (config, dateFormat) => ({
  buildItems(items) {
    return _.map(items, this.buildItem)
  },
  buildItem(item) {
    const fields = mapping(item, config.fields)
    return {
      id: item.id,
      title: _.find(fields, { 'type': 'title' }).val,
      description: DescriptionBee(fields),
      summary: SummaryBee(fields),
      properties: PropsBee(fields),
      informations: InfosBee(fields),
      dates: DatesBee(fields, dateFormat),
      images: ImagesBee(fields),
      tags: TagsBee(fields)
    }
  }
})
