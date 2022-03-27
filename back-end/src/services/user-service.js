const userRepo = require("../repositories/user-repo");

class UserService {
  add(user) {
    return userRepo.save(user);
  }

  getAll() {
    return userRepo.findAll();
  }

  getById(id) {
    return userRepo.findOne(id);
  }
}

module.exports = UserService;
