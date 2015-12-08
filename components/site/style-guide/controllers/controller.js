module.exports = createController

var compileJade = require('../../../../site/lib/compile-jade')
  , urlFormatter = require('../../../../site/lib/url-formatter')

function createController (serviceLocator) {

  serviceLocator.router.get('/style-guide', function (req, res) {
    var template = compileJade(__dirname + '/../views/pages/index.jade')
      , formattedUrls = urlFormatter(req)

    res.send(template(
      { config: serviceLocator.config
      , formattedUrls: formattedUrls
      , meta: { title: 'Style Guide' }
      }
    ))
  })

  serviceLocator.router.get('/style-guide/branding', function (req, res) {
    var template = compileJade(__dirname + '/../views/pages/branding.jade')
      , formattedUrls = urlFormatter(req)

    res.send(template(
      { config: serviceLocator.config
      , formattedUrls: formattedUrls
      , meta: { title: 'Branding' }
      , colors:
          [ { name: 'Blue', class: 'blue' }
          , { name: 'Black', class: 'black' }
          , { name: 'Grey', class: 'grey' }
          , { name: 'White', class: 'white' }
          ]
      }
    ))
  })

  serviceLocator.router.get('/style-guide/typography', function (req, res) {
    var template = compileJade(__dirname + '/../views/pages/typography.jade')
      , formattedUrls = urlFormatter(req)

    res.send(template(
      { config: serviceLocator.config
      , formattedUrls: formattedUrls
      , meta: { title: 'Typography' }
      }
    ))
  })

  serviceLocator.router.get('/style-guide/font-samples', function (req, res) {
    var template = compileJade(__dirname + '/../views/pages/font-samples.jade')
      , formattedUrls = urlFormatter(req)

    res.send(template(
      { config: serviceLocator.config
      , formattedUrls: formattedUrls
      , meta: { title: 'Font Samples' }
      , fonts:
          [ { name: 'Arial', class: 'arial' }
          , { name: 'Arial Bold', class: 'arial-bold' }
          , { name: 'Arial Italic', class: 'arial-italic' }
          , { name: 'Georgia', class: 'georgia' }
          , { name: 'Georgia Bold', class: 'georgia-bold' }
          , { name: 'Georgia Italic', class: 'georgia-italic' }
          ]
      }
    ))
  })

  serviceLocator.router.get('/style-guide/buttons', function (req, res) {
    var template = compileJade(__dirname + '/../views/pages/buttons.jade')
      , formattedUrls = urlFormatter(req)

    res.send(template(
      { config: serviceLocator.config
      , formattedUrls: formattedUrls
      , meta: { title: 'Buttons' }
      }
    ))
  })

  serviceLocator.router.get('/style-guide/controls', function (req, res) {
    var template = compileJade(__dirname + '/../views/pages/controls.jade')
      , formattedUrls = urlFormatter(req)

    res.send(template(
      { config: serviceLocator.config
      , formattedUrls: formattedUrls
      , meta: { title: 'Controls' }
      }
    ))
  })

  serviceLocator.router.get('/style-guide/forms', function (req, res) {
    var template = compileJade(__dirname + '/../views/pages/forms.jade')
      , formattedUrls = urlFormatter(req)

    res.send(template(
      { config: serviceLocator.config
      , formattedUrls: formattedUrls
      , meta: { title: 'Forms' }
      }
    ))
  })

  serviceLocator.router.get('/style-guide/components', function (req, res) {
    var template = compileJade(__dirname + '/../views/pages/components.jade')
      , formattedUrls = urlFormatter(req)

    res.send(template(
      { config: serviceLocator.config
      , formattedUrls: formattedUrls
      , meta: { title: 'Components' }
      }
    ))
  })

  serviceLocator.router.get('/style-guide/image-ratios', function (req, res) {
    var template = compileJade(__dirname + '/../views/pages/image-ratios.jade')
      , formattedUrls = urlFormatter(req)

    res.send(template(
      { config: serviceLocator.config
      , formattedUrls: formattedUrls
      , meta: { title: 'Image Ratios' }
      , ratios:
          [ { name: 'Landscape 4:3', ratio: '4:3' }
          , { name: 'Portrait 3:4', ratio: '3:4' }
          , { name: 'Square', ratio: '1:1' }
          , { name: 'Landscape 16:9', ratio: '16:9' }
          , { name: 'Landscape 3:2', ratio: '3:2' }
          , { name: 'Portrait 2:3', ratio: '2:3' }
          ]
      }
    ))
  })

  serviceLocator.router.get('/style-guide/advertising', function (req, res) {
    var template = compileJade(__dirname + '/../views/pages/advertising.jade')
      , formattedUrls = urlFormatter(req)

    res.send(template(
      { config: serviceLocator.config
      , formattedUrls: formattedUrls
      , meta: { title: 'Advertising' }
      , adverts:
          [ { name: 'Medium Rectangle / MPU', width: 300, height: 250 }
          , { name: 'Mobile Leaderboard', width: 320, height: 50 }
          , { name: 'Leaderboard', width: 728, height: 90 }
          , { name: 'Large Skyscraper / Billboard', width: 970, height: 250 }
          , { name: 'Half Page', width: 300, height: 600 }
          ]
      }
    ))
  })

  serviceLocator.router.get('/style-guide/template-variables', function (req, res) {
    var template = compileJade(__dirname + '/../views/pages/template-variables.jade')
      , formattedUrls = urlFormatter(req)
      , getShareUrls = require('../../../../site/lib/get-share-urls.js')
      , twitterOptions =
        { text: 'Example'
        , via: '@test'
        , hashtags: 'one,two'
        }

    res.send(template(
      { config: serviceLocator.config
      , formattedUrls: formattedUrls
      , shareUrls: getShareUrls(formattedUrls.initialUrl, twitterOptions)
      , meta: { title: 'Template Variables' }
      }
    ))
  })

}
