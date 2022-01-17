const express = require('express');
const userController = require('./controllers/user.controller');
const studentController = require('./controllers/student.controller');
const evaluationController  = require('./controllers/evaluation.controller');
const upload = require('./middleware/upload');
const app = express();

app.use(express.json());

app.post("/signup",upload.single("photo_url"),userController);

app.post("/signin",userController);

app.use("/students",studentController);
app.use("/evaluations",evaluationController);

module.exports = app;