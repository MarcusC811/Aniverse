const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../units/auth');

router.get('/', async (req, res) => {
    try {
    const postData = await Post.findAll({
        include: [
            {
                model: User,
                attributes: ['name'],
            },
        ],
    });

     // Serialize data so the template can read it
     const post = postData.map((post) => postData.get({ plain: true }));

     // Pass serialized data and session flag into template
     res.render('homepage', { 
       posts, 
       logged_in: req.session.logged_in 
     });
     
   } catch (err) {
     res.status(500).json(err);
   }
 });


router.get('/login/:id', async (req, res) => {
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

router.get('/profile' , withAuth, async (req, res) => {
    try { const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Post }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

    
   
   

module.exports = router;

