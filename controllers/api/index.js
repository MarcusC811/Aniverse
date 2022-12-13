const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postData');

router.use('/users', userRoutes);
router.use('/post', postRoutes);
