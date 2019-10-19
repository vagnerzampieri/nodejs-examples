import EventEmitter from "events";

const eventEmitter = new EventEmitter();

eventEmitter.on("change", () => {
  console.log("Something has changed");
});

setInterval(() => {
  eventEmitter.emit("change");
}, 1000);
