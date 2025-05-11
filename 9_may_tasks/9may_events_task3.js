let Eventsclass = require('events');
const event = new Eventsclass();

event.on("message",()=>console.log("This is message"));

event.emit("message");
event.removeListener("message");
event.emit("message");

