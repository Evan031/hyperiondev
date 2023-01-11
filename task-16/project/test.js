// Always refer to exact function name from file
const { formatString } = require('./stringManip.js');
const http = require('http');
const fileHandler = require('fs');

const input = '   Hello World!   ';
const output = formatString(input);

fileHandler.writeFile('message.txt', output, (err) => {
    if (err) throw err;

});

http.createServer(function(request, response) {
    response.write('The file has been saved');
    response.end();
}).listen(8080, () => {//The listen() method is used to specify which port you want to listen for HTTP requests on. 
    console.log(`Server is listening on port 8080. Open http://localhost:8080`);
});