var fs = require('file-system');

var content = fs.readFileSync("samples.txt");
console.log(content.toString());
console.log("File Read Successfully.");