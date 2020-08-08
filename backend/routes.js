const router = require('express').Router();
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const fetch = require('node-fetch');

global.fetch = fetch;   // unsplash uses fetch

const unsplash = new Unsplash({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  headers: {
    Authorization: `Bearer ${process.env.UNSPLASH_TOKEN}`,
  },
});

router.get('/info', (req, res) => {
  res.send(process.env);
});

router.get('/artist/:user/photos', (req, res) => {
  console.log('[*] artist name: ', req.params.user);
  unsplash.users
    .photos(req.params.user, 1, 10, 'popular')
    .then(toJson)
    .then((json) => {
      res.json(json);
    });
});

router.get('/artist/:user', (req, res) => {
  console.log('[*] artist name: ', req.params.user);
  unsplash.users
    .profile(req.params.user, 1)
    .then(toJson)
    .then((json) => {
      res.json(json);
    });
});

module.exports = router;
