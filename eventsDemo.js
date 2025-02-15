import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log('Hello' + name);
}

function byeHandler(na){
    console.log('Goodbye');
}

//Registering the event listener
myEmitter.on('greet', greetHandler);
myEmitter.on('bye', byeHandler);


//Emitting the event
myEmitter.emit('greet','John');
myEmitter.emit('bye','John');