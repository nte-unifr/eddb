import _ from "lodash"

function queryPath(fields) {
  return _
    .chain(fields)
    .map(path)
    .value()
    .toString()
}

function path(field) {
  if (_.isNil(field.accessor)) {
    return field.name
  } else {
    return `${field.name}.${field.accessor}`
  }
}

export { queryPath, path }
