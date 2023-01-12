const router = require('express').Router();
const { User, Post, Comments } = require('../models');

// Prevent non logged in users from viewing their dashboard
router.get('/', async (req, res) => {
  try {
    // Database sequilize get all posts. Render posts to homepage
    const dbPosts = await Post.findAll();
    const posts = dbPosts.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      posts,
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

router.get('/dashboard', async (req, res) => {
  try {
    // Database sequilize get all posts. Render posts to dashboard
    const dbPosts = await Post.findAll({ where: { user_id: req.session.user_id } });
    const posts = dbPosts.map((project) => project.get({ plain: true }));

    res.render('dashboard', {
      posts,
      user_id: req.session.user_id,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  try {
    const dbPosts = await Post.findByPk(req.params.id);
    const title = dbPosts.title;
    const content = dbPosts.content
    res.render('edit-post', {
      title,
      content,
      id: req.params.id,
      logged_in: req.session.logged_in
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/new-post', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  try {
    const dbPosts = await Post.findAll({ where: { user_id: req.session.user_id } });
    const posts = dbPosts.map((project) => project.get({ plain: true }));

    res.render('new-post', {
      posts,
      user_id: req.session.user_id,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/comments/:post_id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.post_id);
    const title = post.title;
    const content = post.content;
    const username = post.username;
    const post_id = post.id;
    const date = post.date;
    const commentsAll = await Comments.findAll({
      where: {
        post_id: req.params.post_id
      }
    });
    const comments = commentsAll.map((project) => project.get({ plain: true }));
    res.render('comments', {
      title,
      content,
      username,
      post_id,
      date,
      comments,
      user_id: req.session.user_id,
      logged_in: req.session.logged_in
    });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});
