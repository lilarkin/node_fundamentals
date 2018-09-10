const log = require('./logger');
const path = require('path');
const os= require('os');
const fs = require('fs');
//This is a class, not a function, hence the naming structure
const EventEmitter = require('events');
//const Logger = require('./logger');
const http = require('http');

log('message');
const pathObj = path.parse(__filename);

console.log(pathObj);

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);

// Template string ES6
console.log(`Free Memory: ${freeMemory}`);

// synchronouss 
const files = fs.readdirSync('./')
console.log(files);


// Asynchronous - always go Async
fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Result', files);
});

//  get error
/*
fs.readdir('$', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Result', files);
});
*/

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('HelloWorld');
        res.end();
    }

    if (req.url ===  '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end;
    }
});

// server.on('connection', (socket) => {
//     console.log('New connection... ');
// });

server.listen(3000);

console.log('Listening on port 3000...');


/*
//const emitter = new EventEmitter();

// register a listener
emitter.on('messageLogged', function(e) {
    console.log('Listened called', e);
});

// rewrite in ES6
logger.on('messageLogged', (e) => {
    console.log('Listened called', e);
});

//const log = require('./logger');

const logger = new Logger();
logger.log('message');
*/






