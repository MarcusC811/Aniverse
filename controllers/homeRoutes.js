const router = require('express').Router();
const { Post, User } = require('../models');

router.get('/', async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
    }
    
    const postData = await Post.findAll();

    const posts = postData.map((post) => post.get({ plain: true }));

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
    if (!req.session.logged_in) {
        res.redirect('/login');
    }
    res.render('about');
});


router.get('/signup', async (req, res) => {
    res.render('signup');
});

router.get('/profile' , async (req, res) => {
    if (!req.session.user_id) {
    res.redirect('/login')
    }
    const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
      });

    const user = userData.get({ plain: true });
    res.render('profile', { ...user })
})

module.exports = router;
