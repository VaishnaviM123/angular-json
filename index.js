const jsonServer = require('json-server')

//server creation
const server = jsonServer.create()

//connect front with server
const cors = require('cors')
server.use(cors())

// middleware json-js
const mw = jsonServer.defaults()
server.use(mw)

//create router
const router = jsonServer.router('data.json')
server.use(router)

const PORT=5000
server.listen(PORT,()=>{console.log(`server started at ${PORT}`)})