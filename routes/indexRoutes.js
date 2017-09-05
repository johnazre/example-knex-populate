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
  .populate('professors', 'professor_id', 'professor')
  // .limit(2) <--- can also use
  // .orderBy('name', 'asc') <--- can also use
  .exec()
  .then(results => res.send(results));
});

module.exports = router;
