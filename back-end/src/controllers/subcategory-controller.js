const SubCategory = require("../domain/subcategory");
const SubCategoryService = require("../services/subcategory-service");
var subCategoryService = new SubCategoryService();

exports.get = async (req, res) => {
  res.json(await subCategoryService.getAll());
};

exports.getById = async (req, res) => {
  res.json(await subCategoryService.getById(req.params.id));
};

exports.post = async (req, res) => {
  res.json(
    await subCategoryService.add(
      req.body.categoryId,
      new SubCategory(req.body.name)
    )
  );
};
