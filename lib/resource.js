
module.exports = Resource

function Resource (options) {
}

Resource.create = function (options, callback) {
}

Resource.get = function (id, callback) {
}

Resource.list = function (pageToken, callback) {
}

Resource.remove = function (id, callback) {
}

Resource.prototype.save = function (callback) {
}

Resource.prototype.remove = function (callback) {
  Resource.remove(this.id, callback)
  return this
}
