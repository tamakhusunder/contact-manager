const express = require('express');
const router = express.Router();
const auth = require('../middleware/authenticate');
const contactModel = require('../models/contact');

router.get('/contacts', auth, (req, res) => {
  contactModel
    .find({})
    .exec()
    .then((contact) =>{
      res.status(200).json(contact);
    })
    .catch((err) => {
      res.status(500).json({error:err});
    });
});

router.post('/contacts', auth, (req, res) => {
  const contact = new contactModel({
    name : req.body.name,
    phone : req.body.phone,
    image : req.body.image,
  });
  contact
    .save()
    .then((result) => {
      res.status(200).json({message : "Contact added"});
    })
    .catch((err) => {
      res.status(500).json({errror: err});
    });
});

router.put('/contacts/:id', auth, (req, res) => {
  const {id} = req.params;
  const updateValue = {
    name : req.body.name,
    phone : req.body.phone,
    image : req.body.image,
  };
  contactModel.findByIdAndUpdate(id,updateValue, (err, docs) =>{
    if(err) {
      res.status(500).json(err);
    }
    else{
      res.status(200).json({message:"Data updated succesfully"});
    }
  });
});


router.delete('/contacts/:id', auth, (req, res) => {
  const {id} = req.params;
  contactModel.findByIdAndDelete(id, (err,docs) => {
    if(err) {
      res.status(500).json(err);
    }
    else{
      res.status(200).json({message:`${docs.name} data deleted`});
    }
  });
});

module.exports = router;