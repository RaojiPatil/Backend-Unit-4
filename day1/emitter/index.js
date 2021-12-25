const EventEmitter = require('events');

const userRegsterfunction = require("./register");

const eventEmitter = new EventEmitter();
const a = "raoji patil";
function userregisterd() {
    
   
    eventEmitter.on("user regirsted", function (name){
        console.log(`send veriication Email ${name.firstname}`);
    })

    eventEmitter.on("user regirsted", function () {
        console.log("send welcome Email");
    })

    eventEmitter.on("user regirsted", function () {
        console.log("send Admin Email");
    })
    eventEmitter.emit("user regirsted", {firstname: `${a}`});
    userRegsterfunction();
}
userregisterd();