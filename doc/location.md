# Locations

```js
var Location = require('mirror-api')(options).Location
```

## Properties

- **id** String - The id of a location record
- **timestamp** Date - The time at which this location was captured
- **latitude** Number - The latitude, in degrees
- **longitude** Number - The longitude, in degrees
- **accuracy** Number - The accuracy of the location fix in meters
- **displayName** String - The name to be displayed
- **address** String - The full address of the location

## Location.list(callback)

Retrieves a list of locations for the user. 

```js
Location.list(function (err, locations) {
  // ...
})
```

#### Arguments

- **callback(err, locations)** Function - The callback
  - ***err*** Error | null - An error object
  - **locations** [Location] - An array of Locations

#### Returns

`this`

## Location.get([id ,]callback)

Gets a single location by id.

```js
Location.get('latest', function (err, location) {
  // ...
})
```

#### Arguments

- ***id*** String - The id of a location record, defaults to `latest`
- **callback(err, location)** Function - The callback
  - ***err*** Error | null - An error object
  - **location** Location - The Location

#### Returns

`this`
