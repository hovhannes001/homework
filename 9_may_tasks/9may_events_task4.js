let Eventsclass = require('events');
const event = new Eventsclass();

event.once("click",()=>console.log("You clicked"));

event.emit("click");
event.emit("click");
