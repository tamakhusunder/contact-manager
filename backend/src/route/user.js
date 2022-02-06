const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/env'); 

const userModel = require('../models/user');

router.get('/', function (req, res) {
  let a='sunder';
  let b;
  const hash = bcrypt.hashSync(a, 10);
  const reu=bcrypt.compareSync("sunder", hash); // true
  console.log(hash);
  console.log(reu);
    res.send('hello world');
    
  });


  

router.post('/signup', function (req, res) {
  userModel.find({email:req.body.email})
    .exec()
    .then((user) =>{
      if (user.length >=1) {
        res.status(400).json({message : "Mail already exits"});
      }else{
        bcrypt.hash(req.body.password, 10, function(err, hash) {
          if (err){
            console.log(err);
            res.status(500).json({error:err});
          }else{
            const user = new userModel({
              email: req.body.email,
              password : hash
            });
            user
              .save()
              .then((result) =>{
                console.log("result",result);
                res.status(200).json({message:"User created."});
              })
              .catch((err) =>{
                console.log(err);
                res.status(500).json({error:err});
              });
            } 
        });
      }
    });
});
    

router.post('/signin', function (req, res) {
  userModel.find({email:req.body.email})
    .exec()
    .then((user) =>{
      if (user.length >=1) {
        const comparePassword = bcrypt.compareSync(req.body.password, user[0].password); // true
        if (comparePassword){
          var token = jwt.sign({ email: user[0].email}, SECRET_KEY);
          res.status(200).json({token});
        }
        else{
          res.status(401).json({msg:"Auth Fail"});
        }
      }
      else{
        res.status(401).json({msg:"Auth Fail"});
      }
    })
    .catch((err) =>{
      console.log(err);
      res.status(500).json({error:err});
    });
});


module.exports = router;