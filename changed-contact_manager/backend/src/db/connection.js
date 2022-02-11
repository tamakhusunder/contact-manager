const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my_database',{useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("database connection successful.."))
  .catch((err) => console.log("err",err));