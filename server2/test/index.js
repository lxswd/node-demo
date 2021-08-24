const server = require('./server')
const router = require('./router')
const requestHandlers = require('./requestHandlers')

const handle = {}
handle['/'] = requestHandlers.login
handle['/login'] = requestHandlers.login

server.start(router.route, handle)