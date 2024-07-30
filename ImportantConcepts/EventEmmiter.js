// event emmitter in nodejs

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// for capturing values
eventEmitter.on("event1", (data) => {
  console.log("Value captured ==", data);
});

// for emitting values
eventEmitter.emit("event1", "Emitted value from eventEmitter");
