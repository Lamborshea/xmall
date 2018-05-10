const server = require('./server')
const router = require('./router')
const api = require('./api')

server.start(router.route, api.weather);