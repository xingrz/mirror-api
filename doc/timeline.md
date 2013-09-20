Timeline
==========

```js
var Mirror = require('mirror-api')
  , OAuthic = require('oauthic-google').client({
      clientId: 'YOUR_CLIENT_ID'
    , clientSecret: 'YOUR_CLIENT_SECRET'
    })

express.post('/timeline/send', function (req, res) {
  var oauthic = OAuthic
    .token(req.user.accessToken, req.user.expiresAt)
    .refresh(req.user.refreshToken, function (refreshed, done) {
      req.user.accessToken = refreshed.accessToken
      req.user.expiresAt   = refreshed.expiresAt
      req.user.save(done)
    })

  var Timeline = Mirror(oauthic).Timeline

  Timeline.create({ text: req.body.text }, function (err, timeline) {
    if (err) {
      return res.send(500)
    }
    
    return res.send('Timeline card created')
  })
})
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
