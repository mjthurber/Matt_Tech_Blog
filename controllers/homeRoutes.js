const router = require('express').Router();
const { Post } = require('../models');
const withauth = require('../utils/auth');

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});



router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User
        },
        ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', posts);
    } catch (err) {
        res.status(500).json(err);
        }
}
);

router.get('/post/:id', withauth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include: [
            {
              model: User,
            },
          ],
        },
        {
          model: User,
        },
        ],
    });

    const post = postData.get({ plain: true });
    const comments = posts.comments;

    res.render('post', { post, comments, loggedIn: req.session.loggedIn });

    } catch (err) {
        res.status(500).json(err);
        }
}
);


module.exports = router;