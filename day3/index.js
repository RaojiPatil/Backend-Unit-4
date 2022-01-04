const express = require("express");

const app = express();

app.use(logger);

app.get("/", (req, res) => {
    return res.send({name: "google.com" });
});


app.get("/users", (req, res) => {
    return res.send("All user");
});


function logger(req, res, next) {
    console.log("one");
    console.log("two");
    next();
}

app.listen(2248, () => {
    console.log("listing on port 23478");
});