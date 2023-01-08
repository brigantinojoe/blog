const sequelize = require('../config/connection');
const { Post } = require('../models');

const postData = [
  {
    title: "Test Post",
    content: "This is a test post for Sal.",
    username: "Sal",
    date: "March 30, 2018",
    user_id: 1
  },
  {
    title: "JSON",
    content: "JSON is easy to read sometimes, but third-pary APIs can be complicated",
    username: "Lernantino",
    date: "May 05, 2017",
    user_id: 2
  },
  {
    title: "Node.js",
    content: "Node.js is an awesome server-side language for javascript users!",
    username: "Amiko",
    date: "June 10, 2019",
    user_id: 3
  },
  {
    title: "Confusion.js",
    content: "This isn't real, but I'd like to say that I'm confused by the world.",
    username: "Jordan",
    date: "July 4, 2020",
    user_id: 4
  },
  {
    title: "Posts",
    content: "I sure hope these posts are rendered to the page properly!",
    username: "Blake",
    date: "August 14, 2016",
    user_id: 5
  }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;


