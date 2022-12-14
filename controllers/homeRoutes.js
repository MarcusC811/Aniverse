const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth =require('../utils/auth');

router.get('/', async (req, res) => {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

      
        const posts = postData.map((post) => post.get({ plain: true }));
    });


       
    

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});



router.get('/aboutus', async (req, res) => {
 res.render('aboutus');
});


router.get('/signup', async (req, res) => {
 res.render('signup');
});

router.get('/profile' , async (req, res) => {
    if (!req.session.user_id) {
    res.redirect('/login' (user_id ))
    }
res.render('profile')
})

module.exports = router;

