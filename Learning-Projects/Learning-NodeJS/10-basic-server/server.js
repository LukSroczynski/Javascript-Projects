/*

 */

const http = require("http");
const fs = require("fs");

/**
 * Start server on port 8888
 */
(function startServer() {
    http.createServer(onRequest).listen(8888);
    console.log("Server is now running..");
})();

/**
 * handle user request
 * @param request
 * @param response
 */
function onRequest(request, response) {
    console.log("User made request: " + request.url);

    if(request.method == "GET" && request.url == "/") {
        response.writeHead(200, {"Context-Type": "text/plain"});
        fs.createReadStream("./index.html").pipe(response);
    } else {
        send404response(response);
    }
}

/**
 * handle 404 error response
 * @param response
 */
function send404response(response) {
    response.writeHead(404, {"Context-Type": "text/plain"});
    response.write("Error 404: Page not found.");
    response.end();
}

