var fs = require("fs");

fs.readFile("samples.txt", function (err, content) {
    if(err)
    {
        console.error(err);
    }
    else
    {
        console.log(content.toString());
        console.log("File Read Successfully.");
    }
});

console.log("Let's proceed with other stuff.");