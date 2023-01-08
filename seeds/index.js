const sequelize = require('../config/connection');
// Import comment, post, and user.js files.
const seedComments = require("./commentData");
const seedPosts = require("./postData");
const seedUsers = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: false });

  await seedUsers();
  
  await seedPosts();
  
  await seedComments();

  process.exit(0);
};

seedAll();
