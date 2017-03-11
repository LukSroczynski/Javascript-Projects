/*
    few examples how to use core modules
 */

let fs = require("fs");


/*
    Create file
 */
fs.writeFileSync("Hello.txt", "Hello \nWorld");

/*
    Read file
 */
console.log(fs.readFileSync("Hello.txt").toString());

/*
    Create path for file and convert path to your system path
 */
let path = require("path");
const webPath = "Desktop//Home//Whatever\\index.html";

console.log(path.normalize(webPath));
console.log(path.dirname(webPath));
console.log(path.basename(webPath));
console.log(path.extname(webPath));

/*
    random cool stuff - not related to core modules
 */
console.log(__dirname);
console.log(__filename);