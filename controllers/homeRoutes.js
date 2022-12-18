const router = require('express').Router();
const { Post, User } = require('../models');

router.get('/', async (req, res) => {
    if (!req.session.user_id) {
        res.redirect('/login')
        } else {
    const postData = await Post.findAll();
    const posts = postData.map((post) => post.get({ plain: true }));
<<<<<<< HEAD
    res.render('homepage', { posts: posts }); 
=======

<<<<<<< HEAD

    // res.status(200).json(posts);
    res.render('homepage');
>>>>>>> 96d18c834241363f7ca40a01a9e550d7f68eb8a0
=======
    res.render('homepage', { posts: posts, loggedIn: true });
    }
>>>>>>> 8264732ac79a3f6392d7dbca376d58b7a852e9d9
});

router.get('/login', (req, res) => {
    if (req.session.user_id) {
        res.redirect('/profile');
        return;
    } else {
    res.render('login');
    }
});



router.get('/aboutus', async (req, res) => {
    if (!req.session.user_id) {
        res.redirect('/login')
        } else {
    res.render('about', {loggedIn: true});
    }
});


router.get('/signup', async (req, res) => {
    if (req.session.user_id) {
        res.redirect('/')
    }
    res.render('signup', {signUp: true});
});

router.get('/profile' , async (req, res) => {
    if (!req.session.user_id) {
    res.redirect('/login')
    } else {
    const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
      });

    const user = userData.get({ plain: true });
    res.render('profile', { ...user, loggedIn: true })
    }
})

module.exports = router;
