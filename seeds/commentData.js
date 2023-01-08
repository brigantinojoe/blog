const sequelize = require('../config/connection');
const { Comments } = require('../models');

const commentData = [
  {
    username: "Sal",
    content: "This is a great post",
    date: "March 30, 2018",
    post_id: 5
  },
  {
    content: "So True",
    username: "Lernantino",
    date: "May 05, 2017",
    post_id: 4
  },
  {
    content: "You read my mind",
    username: "Amiko",
    date: "June 10, 2019",
    post_id: 3
  },
  {
    content: "Amen!",
    username: "Jordan",
    date: "July 4, 2020",
    post_id: 2
  },
  {
    content: "Right? Absolutely agree",
    username: "Blake",
    date: "August 14, 2016",
    post_id: 1,
  }
]

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;


