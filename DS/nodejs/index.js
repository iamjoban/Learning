const EventEmitter = require("events");

const x = new EventEmitter();

x.emit("event", "aaa");

x.on("event", (data) => {
  console.log(data);
});


