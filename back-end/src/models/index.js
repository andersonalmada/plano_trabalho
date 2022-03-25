const Sequelize = require("sequelize");
require("dotenv/config");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

sequelize.sync({
  alter: true,
});

const db = {};

db.category = require("./category-model")(sequelize, Sequelize);
db.subCategory = require("./subcategory-model")(sequelize, Sequelize);

db.category.hasMany(db.subCategory);
db.subCategory.belongsTo(db.category);

module.exports = db;
