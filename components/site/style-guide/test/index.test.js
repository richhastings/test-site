var request = require('supertest')
  , async = require('async')
  , express = require('express')
  , createController = require('../controllers/controller')
  , serviceLocator = require('service-locator')()
  , createConfigury = require('configury')
  , config = createConfigury(__dirname + '/../../../../config.json')(process.env.NODE_ENV)
  , app = express()

serviceLocator.register('config', config)
serviceLocator.register('router', app)

createController(serviceLocator)

describe('Index', function () {

  it('should only contain 2 fixture boxes', function (done) {
    
    

    // function testRoute (route, cb) {
    //   request(app)
    //     .get(route)
    //     .expect(200, cb)
    // }

    // async.each(routes, testRoute, done)
  })
})
