// Always refer to exact function name from file
const {findPrimes} = require('./prime.js');
const {evenNums} = require('./evenNums.js');
const http = require('http');
const fileHandler = require('fs');


const primes = findPrimes(100);
const evenNumbers = evenNums();

fileHandler.writeFile('nums.txt', 'Prime Numbers:\n', err => {
    if (err) throw err;
    fileHandler.appendFile('nums.txt', `${primes}\n`, err => {
        if (err) throw err;
    });
    fileHandler.appendFile('nums.txt', '\nEven Numbers:\n', err => {
        if (err) throw err;
    });
    fileHandler.appendFile('nums.txt', `${evenNumbers}\n`, err => {
        if (err) throw err;
    });
});

http.createServer(function (request, response) {
    response.write('The file has been saved');
    response.end();
}).listen(8080, () => {
    //The listen() method is used to specify which port you want to listen for HTTP requests on.
    console.log(`Server is listening on port 8080. Open http://localhost:8080`);
});
