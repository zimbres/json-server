const dotenv = require('dotenv')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('data/db.json')
const middlewares = jsonServer.defaults()

dotenv.config()
dotenv.config({ path: '.env.local', override: true })

const PORT = process.env.PORT || 3000

server.use(middlewares)
server.use(router)
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`)
})
