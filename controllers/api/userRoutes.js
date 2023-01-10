const router = require('express').Router();
const { User, Post, Comments } = require('../../models');


router.post('/signup', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.email
    });
    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = newUser.id;
      req.session.username = req.body.username;

      res.status(200).json(newUser);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
    }

    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: `Incorrect something email or password, please try again` });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      logged_in = true;
      req.session.username = req.body.username;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/save-post', async (req, res) => {
  try {
    const dbPosts = await Post.create({
      title: req.body.title,
      content: req.body.content,
      username: req.session.username,
      date: new Date(),
      user_id: req.session.user_id
    });
    res.status(200).json(dbPosts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post('/delete-post', async (req, res) => {
  try {
    const dbPosts = await Post.destroy({
      where: {
        id: req.body.post_id
      }
    });
    res.status(200).json(dbPosts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
