const readline = require('readline');
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

let books = ["GOT", "ebook"];

function showBooks() {
    console.log("event listened");
    console.log(books);
 
     return;
}
const r1 = readline.createInterface({
    input:process.stdin,
    output: process.stdout,
});



function interactWithuser() {
    r1.question("process 1, 2 or 3 to do the below actions",  (selectedoption) => {
        eventEmitter.on("show book pressed", showBooks);
        if (selectedoption === "1") {
         eventEmitter.emit("show book pressed");
         interactWithuser();
        } else if(selectedoption === "2") {
            r1.question("please provide name of your selected book", (bookName) => {
                books.push(bookName);
                eventEmitter.emit("show book pressed");
            });

        }else if(selectedoption === "3") {
            r1.question("Are you sure you want to quit");
            r1.close();
        }

    });
   
}

r1.on ("close", () => {
    console.log("bye bye");
    // process.exit(0);
})

interactWithuser();