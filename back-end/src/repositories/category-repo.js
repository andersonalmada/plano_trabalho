const db = require("../models");
const Category = db.category;
const SubCategory = db.subCategory;
const { Op } = require("sequelize");

exports.save = async (category) => {
  return await Category.create({
    name: category.name,
  })
    .then((result) => {
      console.log("Created category: " + JSON.stringify(result));
      return result;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.findAll = async () => {
  const result = await Category.findAll({
    include: [
      {
        model: SubCategory,
        attributes: { exclude: ["categoryId"] },
      },
    ],
  });
  return result;
};

exports.findOne = async (id) => {
  return await Category.findByPk(id, {
    include: [
      {
        model: SubCategory,
        attributes: { exclude: ["categoryId"] },
      },
    ],
  })
    .then((category) => {
      return category;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};
