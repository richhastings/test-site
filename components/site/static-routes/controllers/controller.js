var compileJade = require('../../../../site/lib/compile-jade')
  , urlFormatter = require('../../../../site/lib/url-formatter')

module.exports = function createController (serviceLocator) {

  serviceLocator.router.get('/', function (req, res) {
    var template = compileJade(__dirname + '/../views/index.jade')
      , formattedUrls = urlFormatter(req)

    res.send(template(
      { config: serviceLocator.config
      , formattedUrls: formattedUrls
      , meta: {}
      }
    ))
  })

}
