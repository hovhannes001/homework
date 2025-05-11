let Eventsclass = require('events');
const event = new Eventsclass();

event.on("error",(err)=>console.log(err.message));

event.emit("error",new Error("some error"));