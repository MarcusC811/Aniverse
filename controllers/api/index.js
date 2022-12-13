const router = require('express').Router();

const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/post', postRoutes);
router.use('/user', userRoutes);
router.use('/home', homeRoutes);

module.exports = router;