let Eventsclass = require('events');
const event = new Eventsclass();

event.on("greeting",()=>console.log("Hello World!"));

event.emit("greeting");