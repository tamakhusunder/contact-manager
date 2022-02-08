const path = require('path');
const express = require('express');
const app = express();

const userRouter = require('./route/user');
const contactRouter = require('./route/contact');
const APP_PORT = process.env.PORT || '5000';
require("./db/connection");

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(userRouter);
app.use(contactRouter);

app.listen(APP_PORT, () =>{
    console.log(`server running at Port : ${APP_PORT}`);
}); 