const EventEmitter = require("events");

const verificationEmail = require("./verification")

const welcome = require("./welcome");

const adminEmail = require("./admin");

const eventEmitter = new EventEmitter();

module.exports = function () {
    const user = {firstName: "Raoji"}
    eventEmitter.on("user register", verificationEmail);
    eventEmitter.on("user register", welcome);
    eventEmitter.on("user register", adminEmail);

    eventEmitter.emit("user register", user);
}