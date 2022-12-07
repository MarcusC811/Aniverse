const User = require('./User');
const Post = require('./Post');

User.belongsToMany(Post, {
    foreignKey: 'user_id'
});

Post.hasOne(User, {
    foreignKey: 'user_id'
});

module.exports = {User, Post}