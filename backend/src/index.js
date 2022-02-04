const path = require('path');
const express = require('express');
const app = express();
const router = express.Router();

const APP_PORT = process.env.PORT || '5000';

app.use(express.json());
app.use(express.urlencoded({ extended: true}));


router.get('/', function (req, res) {
    res.send('hello world')
  });

router.post('/signup', function (req, res) {
    res.send('signin')
  });

router.post('/signin', function (req, res) {
    res.send('login')
  });




router.get('/contacts', function (req, res) {
    res.send('get')
  });

router.post('/contacts', function (req, res) {
    res.send('post')
  });
router.put('/contacts/:id', function (req, res) {
    res.send('put')
  });
router.delete('/contacts/:id', function (req, res) {
    res.send('del')
  });


app.use("/", router);

app.listen(APP_PORT, () =>{
    console.log(`server running at Port : ${APP_PORT}`);
}); 