const User = require('./User');
const Post = require('./Posts');
const Comments = require('./Comments');

// Users have many Posts
User.hasMany(Post, {
    foreignKey: 'user_id',
});

// Posts belong to Users
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// // Posts have many comments
// Post.hasMany(Comments, {
//     foreignKey: 'post_id'
// });

// // Comments belong to posts
// Comments.belongsTo(Post, {
//     foreignKey: 'post_id'
// });

module.exports = { User, Post, Comments };
