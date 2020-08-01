const ShortUrl = require('../models/shortUrl');
var express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');
var router = express.Router();

mongoose.connect('mongodb://localhost:27017/urlShortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Db connected succesfully')).catch(err => console.log(err));

/* GET home page. */
router.get('/', async (req, res) => {
  const shortUrl = await ShortUrl.find()
  res.render('index', { title: 'URL Shortener', shortUrl: shortUrl });
});

router.post('/shorturls', async (req, res) => {
  const full = req.body.fullurl;
  await ShortUrl.create({ full: full })
  res.redirect('/');
})

router.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });

  if (shortUrl === null) return res.statusCode(404);

  shortUrl.clicks++;
  shortUrl.save();
  res.redirect(shortUrl.full)
})
module.exports = router;
