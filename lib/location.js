var inherits = require('util').inherits

var Resource = require('./resource')

function Location (props) {
  if (!(this instanceof Location)) {
    return new Location(props)
  }
  
  Resource.apply(this, arguments)
}

inherits(Location, Resource)
module.exports = Location
