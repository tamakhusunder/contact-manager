const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// const router = express.Router();
const userRouter = require('./route/user');
const contactRouter = require('./route/contact');
const APP_PORT = process.env.PORT || '5000';

mongoose.connect('mongodb://localhost:27017/my_database',{useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("database connection successful.."))
  .catch((err) => console.log("err",err));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(userRouter);
app.use(contactRouter);

app.listen(APP_PORT, () =>{
    console.log(`server running at Port : ${APP_PORT}`);
}); 