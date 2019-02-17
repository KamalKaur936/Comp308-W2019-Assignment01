let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Project Page' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Service Page' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

router.get('/projectList', function(req, res, next) {
  res.render('index', { title: 'My Project List' });
});

module.exports = router;
