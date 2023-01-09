const router = require('express').Router();
const { User } = require('../models');

// Prevent non logged in users from viewing their dashboard
router.get('/', async (req, res) => {
  try {
    // Database sequilize get all posts. Render posts to homepage

    // const posts = userPosts.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
