let Eventclass = require('events');
const event = new Eventclass();

event.on("status",() => console.log("This is first print"));
event.on("status",() => console.log("This is second print"));
event.emit("status");