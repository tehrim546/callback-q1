"use strict";
//Implement a callback function within a setTimeout to log a message after a delay. Be aware of the asynchronous nature of setTimeout.
function delayedLog(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}
// example usage:
console.log("Start");
delayedLog("Delayed message after 2000 milliseconds", 2000),
    console.log("End");
