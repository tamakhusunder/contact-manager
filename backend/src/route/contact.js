const express = require('express');
const router = express.Router();

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

module.exports = router;