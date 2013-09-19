# Locations

```js
var Location = require('mirror-api').Location
```

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
