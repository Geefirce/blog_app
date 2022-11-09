const http = require('http')
const app = require('./app')
const { PORT } = require('./config/config')

const server = http.createServer(app)
server.listen(PORT, () => console.log(` app runing  on port ${PORT}`))



// ${process.env.NODE_ENV}