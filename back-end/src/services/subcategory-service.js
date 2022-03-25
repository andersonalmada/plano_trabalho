const subCategoryRepo = require("../repositories/subcategory-repo");

class SubCategoryService {
  add(categoryId, subCategory) {
    return subCategoryRepo.save(categoryId, subCategory);
  }

  getAll() {
    return subCategoryRepo.findAll();
  }

  getById(id) {
    return subCategoryRepo.findOne(id);
  }
}

module.exports = SubCategoryService;
