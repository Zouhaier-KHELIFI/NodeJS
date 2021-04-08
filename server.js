var http = require('http')
var hostname = '127.0.0.1'
var port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('hello world')
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})