const http = require('http');
const url = require('url');


function start(route, handle) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' recieved.');

        route(handle, pathname, response);
    }

    http.createServer(onRequest).listen(5000);
    console.log('Server has started');
}

exports.start = start;
