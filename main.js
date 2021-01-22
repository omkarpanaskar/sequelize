const http = require('http');
const port = 8080
const app = require('./app')
const server = http.createServer(app, (req, res, next) => {
  res.end('welcome')
})
server.listen(port, () => {
  console.log(`server running on localhost://${port}\n`);
});