const readline = require('readline');

const r1 = readline.createInterface({
    input:process.stdin,
    output: process.stdout,
});

const books = ["GOT", "ebook"];

function interactWithuser() {
    r1.question("process 1, 2 or 3 to do the below actions",  (selectedoption) => {
        if (selectedoption === "1") {
            console.log(books);
            interactWithuser();
        }
    });
   
}

interactWithuser();