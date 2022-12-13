const router = require('express').Router();
const { Post, User } = require('../../models');

router.post('/', async (req, res) => {
    const postInfo = await Post.create({
        ...req.body,
    });

    if(!postInfo) {
        res.status(404).json({message: 'Invalid information provided'});
    }

    res.status(200).json(postInfo);
});

module.exports = router;