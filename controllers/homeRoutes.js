const router = require('express').Router();
const {User, Post} = require('../models');

// Main Page load in for all post
router.get('/', async (req, res) => {
    const postData = await Post.findAll({
        include: [
            {
                model: User,
                attributes: ['username'],
            },
        ],
    });

    const posts = postData.map((post) => post.get({ plain: true}));

    if(!posts) {
        res.status(404).json(err);
    }

    res.status(200).json(posts);
})

module.exports = router;