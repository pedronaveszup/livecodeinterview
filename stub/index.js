import Hapi from 'hapi'
import routes from './routes'
import { forEach, random } from 'lodash'

const createRoute = (route) => ({
  ...route,
  options: { cors: true },
  handler: (request, h) => {
    return new Promise((resolve) => setTimeout(() => resolve(route.handler(request, h))))
  },
})

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: true
    }
  })

  forEach(routes, (route) => server.route(createRoute(route)))

  await server.start()
  // eslint-disable-next-line no-console
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  // eslint-disable-next-line no-console
  console.log(err)
  process.exit(1)
})

init()
