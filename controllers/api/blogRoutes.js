const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

//get all blog posts
router.post('/', withAuth, async (req, res) => {
  try {
    const blogPosts = await Blog.findAll();
    res.render('blog/index', { blogPosts });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

//delete a blog post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const BlogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!BlogData) {
      res.status(404).json({ message: 'No Blog found with this id!' });
      return;
    }

    res.status(200).json(BlogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//create a blog post
router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
}
);

//update a blog post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const BlogData = await Blog.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!BlogData) {
      res.status(404).json({ message: 'No Blog found with this id!' });
      return;
    }

    res.status(200).json(BlogData);
  } catch (err) {
    res.status(500).json(err);
  }
}
);

module.exports = router;
