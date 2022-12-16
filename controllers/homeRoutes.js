const router = require('express').Router();
const { Post, User } = require('../models');

router.get('/', async (req, res) => {
    const postData = await Post.findAll();

    const posts = postData.map((post) => post.get({ plain: true }));


    // res.status(200).json(posts);
    res.render('homepage', { posts: posts });
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    res.render('login');
});



router.get('/aboutus', async (req, res) => {
    res.render('about');
});


router.get('/signup', async (req, res) => {
    res.render('signup');
});

router.get('/profile' , async (req, res) => {
    // if (!req.session.user_id) {
    // res.redirect('/login' (user_id ))
    // }
    res.render('profile')
})

module.exports = router;

// {
//     include: [
//         {
//             model: User,
//             attributes: ['name'],
//         },
//     ],
// }
