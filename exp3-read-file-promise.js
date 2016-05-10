var fs = require('fs');

function readFile(filename, enc) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, enc, function (err, content) {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(content);
            }
        });
    });

    // readFile('samples.txt', 'utf8').then(content => {console.log(content)}).catch(error => {console.log(error)});
    readFile('samples.txt', 'utf8');
}