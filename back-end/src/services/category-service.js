const categoryRepo = require("../repositories/category-repo");

class CategoryService {
  add(category) {
    return categoryRepo.save(category);
  }

  getAll() {
    return categoryRepo.findAll();
  }

  getById(id) {
    return categoryRepo.findOne(id);
  }
}

module.exports = CategoryService;
