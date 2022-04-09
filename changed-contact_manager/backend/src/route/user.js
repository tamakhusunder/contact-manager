const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/env");
const userModel = require("../models/user");

router.post("/signup", (req, res) => {
  userModel
    .find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        res.status(400).json({ message: "Mail already exits" });
      } else {
        bcrypt.hash(req.body.password, 10, function (err, hash) {
          if (err) {
            console.log(err);
            res.status(500).json({ error: err });
          } else {
            const user = new userModel({
              email: req.body.email,
              password: hash,
            });
            user
              .save()
              .then((result) => {
                res.status(200).json({ message: "User created." });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({ error: err });
              });
          }
        });
      }
    });
});

router.post("/signin", (req, res) => {
  userModel
    .find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        const comparePassword = bcrypt.compareSync(
          req.body.password,
          user[0].password
        ); 
        if (comparePassword) {
          const token = jwt.sign(
            { id: user[0].id, email: user[0].email },
            SECRET_KEY,
            // { expiresIn: "2h" }
          );
          res.status(200).json({ token, message: "Login sucessful" });
        } else {
          res.status(401).json({ message: "Auth Fail" });
        }
      } else {
        res.status(401).json({ message: "Auth Fail" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
