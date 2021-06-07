import _ from "lodash"
import { queryPath } from "~/Repositories/Drones/PathDrone.js"

const limit = '&limit=-1'
const filters = '&status=published'

export default ($http, config) => ({
  index() {
    return $http.$get(`${config.item.resource}?fields=*,${queryPath(config.item.fields)}${limit}${filters}`)
  },
  get(id) {
    return $http.$get(`${config.item.resource}/${id}?fields=*,${queryPath(config.item.fields)}${filters}`)
  }
})