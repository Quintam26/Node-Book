const http = require('http');
const url = require('url');


function start(route) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' recieved.');

        route(pathname);
        
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello World');
        response.end();
    }

    http.createServer(onRequest).listen(5000);
    console.log('Server has started');
}

exports.start = start;