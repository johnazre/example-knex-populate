let express = require('express');
let router = express.Router();
let knex = require('../db/knex');
let knex_populate = require('knex-populate');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testthing', function(req, res, next) {
  knex_populate(knex, 'seminars')
  .find()
  .exec()
  .then(results => res.send(results));
});

module.exports = router;
