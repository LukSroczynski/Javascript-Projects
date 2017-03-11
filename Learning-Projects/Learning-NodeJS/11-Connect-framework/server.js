/**
 * Created by Surreallistic on 11.03.2017.
 */

const connect = require("connect");
const http = require("http");

let app = connect();

(function createServer() {
    http.createServer(app).listen(8888);
    console.log("Server is running..");
})();

function doAsFirst(request, response, next) {
    console.log("Bummm.");
    next();
}

function doAsSecond(request, response, next) {
    console.log("Bummm 2.");
    next();
}

// app.use(doAsFirst);
// app.use(doAsSecond);
app.use("/about", about);

function about(request, response) {
    console.log("User came to page about");
}