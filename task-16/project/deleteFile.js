// Always refer to exact function name from file
const http = require('http');
const fileHandler = require('fs');

const path = './nums.txt';

fileHandler.unlink(path, err => {
    if (err) throw err;
});

http.createServer(function (request, response) {
    response.write('The file has been removed');
    response.end();
}).listen(8080, () => {
    //The listen() method is used to specify which port you want to listen for HTTP requests on.
    console.log(`Server is listening on port 8080. Open http://localhost:8080`);
});
