// Creating a Server
//
// Net Ninja video: https://www.youtube.com/watch?v=lm86czWdrk0&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=12

// Let's create a server in app.js.
var http = require('http');

// Now we can use a method that's given to us on this module. http is the module:
var server = http.createServer();
// We have now created a server. However, if we make a request to the server, nothing will happen. So we edit it to look like this:
var server = http.createServer(funtion(req, res){
  // RESPONSE HEADERS DIAGRAM:
  // Request (request and request headers) goes from client to server.
  // Response (response data + response headers (Content-Type and status)) goes from server to client.
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1')
