const EventEmitter = require('events');

const url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        // Send an HTTP request
        console.log(message);
    
        // def emit = making a noise, produce - signalling that an event has happened
        this.emit('messageLogged', { id: 1, url: 'http://' });
    } 
}

/*
function log(message) {
    // Send an HTTP request
    console.log(message);

    // def emit = making a noise, produce - signalling that an event has happened
    emitter.emit('messageLogged', { id: 1, url: 'http://' });
}
*/

module.exports = Logger;