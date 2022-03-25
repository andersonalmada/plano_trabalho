const Category = require("../domain/category");
const SubCategory = require("../domain/subcategory");
const CategoryService = require("../services/category-service");
const SubCategoryService = require("../services/subcategory-service");
var categoryService = new CategoryService();
var subCategoryService = new SubCategoryService();

exports.get = async (req, res) => {
  res.json(await categoryService.getAll());
};

exports.getById = async (req, res) => {
  res.json(await categoryService.getById(req.params.id));
};

exports.post = async (req, res) => {
  res.json(await categoryService.add(new Category(req.body.name)));
};

exports.postAll = async (req, res) => {
  let categories = req.body;

  for (let i = 0; i < categories.length; i++) {
    let category = await categoryService.add(
      new Category(categories[i].category)
    );

    console.log(
      "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
        categories[i].subcategories[0]
    );

    for (let j = 0; j < categories[i].subcategories.length; j++) {
      let subcategory = subCategoryService.add(
        category.id,
        new SubCategory(categories[i].subcategories[j])
      );
    }
  }

  res.json("Created");
};
