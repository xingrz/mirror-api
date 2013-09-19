module.exports = Resource

function Resource (options) {
  if (!(this instanceof Resource)) {
    return new Resource(options)
  }
  
  if ('object' == typeof options) {
    Object.keys(options).forEach(function (key) {
      this[key] = options[key]
    }, this)
  }
}

Resource.create = function (options, callback) {
  if ('undefined' == typeof callback && 'function' == typeof options) {
    callback = options
    options = {}
  }
  else if ('undefined' == typeof options) {
    options = {}
  }
  
  var resource = new Resource(options)
  
  if ('function' == typeof callback) {
    resource.save(callback)
  }
  
  return resource
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
