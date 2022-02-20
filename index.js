var http = require('http');
var url = require('url');
var dt = require('./datetime');


const server = http.createServer((request, response) => {
    // Write the request to the log. 
    console.log(request);

    // Standard Hello World.
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h3>Hello World!</h3>')

});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
