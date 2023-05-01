const events=require('events');

var eventEmitter=new events.EventEmitter();

// create an event handler
var myEventHandler=function(){
    console.log("Event is being handled");
}

// assigning event handler to an event

eventEmitter.on('Scream',myEventHandler);

// fire the event
eventEmitter.emit('Scream');
eventEmitter.emit('hey');
