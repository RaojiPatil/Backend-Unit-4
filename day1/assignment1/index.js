const EventEmitter = require("events")
const eventEmitter = new EventEmitter();

const readLine = require("readline");;
const interface = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const books = ["harry poter", "two states", "ebook"];

function showbooks() {
    console.log(books.json("\n"));
}

eventEmitter.on("queshions", () => {
    interface.question(
        "1: show all book. \n2 Add book. \n: quit. \n",
        (res) => {
            eventEmitter.emit("book", res);
        }
    );
});


eventEmitter.on("books", (res) => {
    if(res == 1) {
        showbooks();
        eventEmitter.emit("queshions");
    } else if (res == 2) {
        interface.question("Enter a new book\n", (bookName) => {
            books.push(bookName);
            eventEmitter.emit("queshions");
        });
    } else if(res == 3) {
        interface.close();
    } else {{
        console.log("please enter a valid input");
    }}
})