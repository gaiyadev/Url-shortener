const ShortUrl = require('../models/shortUrl');
var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

mongoose.connect('mongodb://localhost:27017/urlShortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Db connected succesfully')).catch(err => console.log(err));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'URL Shortener' });
});

router.post('/shorturls', async (req, res) => {
  const full = req.body.fullurl;
  await ShortUrl.create({
    full: full
  })
  res.redirect('/');
})
module.exports = router;
