const db = require("../models");
const SubCategory = db.subCategory;

exports.save = async (categoryId, subCategory) => {
  return SubCategory.create({
    name: subCategory.name,
    categoryId: categoryId,
  })
    .then((result) => {
      console.log("Created SubCategory: " + JSON.stringify(result));
      return result;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.findAll = async () => {
  return await SubCategory.findAll();
};

exports.findOne = async (id) => {
  const result = await SubCategory.findOne({
    where: {
      id: id,
    },
  });
  return result;
};
