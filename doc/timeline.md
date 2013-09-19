Timeline
==========

```js
var Timeline = require('mirror-api')(options).Timeline
```

## Timeline(options)

Create a timeline item object. You may also call `save()` to save it to remote API.

#### Returns

An new Timeline instance.

## Timeline#save(callback)

Save any changes to the remote.

## Timeline#remove(callback)

Delete this timeline item from remote.

## Timeline.create(options[, callback])

Create a timeline card object. Optionally specified a callback so that the creation will be applied immediately.

#### Arguments

- **options** Object
- ***callback(err, timeline)*** Function

#### Returns

`this` The Timeline instance.

## Timeline.get(id, callback)

## Timeline.list([pageToken ,]callback)
