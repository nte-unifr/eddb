import _ from "lodash"
import { queryPath } from "~/Repositories/Drones/PathDrone.js"

export default ($http, config) => ({
  index() {
    return $http.$get(`${config.item.resource}?fields=*,${queryPath(config.item.fields)}&limit=-1`)
  },
  get(id) {
    return $http.$get(`${config.item.resource}/${id}?fields=*,${queryPath(config.item.fields)}`)
  }
})