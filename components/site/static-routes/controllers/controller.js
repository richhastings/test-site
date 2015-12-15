module.exports = createController

var compileJade = require('../../../../site/lib/compile-jade')
  , urlFormatter = require('../../../../site/lib/url-formatter')
  , routes = ['/', '/fixtures', '/players']

function createController (serviceLocator) {

  routes.forEach(createRoute)

  function createRoute (value, index) {

    serviceLocator.router.get(value, function (req, res) {

      var route = (value === '/' ? 'index' : value)
        , template = compileJade(__dirname + '/../views/'+ route + '.jade')
        , formattedUrls = urlFormatter(req)

      res.send(template(
        { config: serviceLocator.config
        , formattedUrls: formattedUrls
        , meta: {}
        }
      ))
    })
  }
}