const userRepo = require("../repositories/user-repo");

class UserService {
  add(user) {
    return userRepo.save(user);
  }

  update(id, user) {
    return userRepo.update(id, user);
  }

  delete(id) {
    return userRepo.delete(id);
  }

  getAll() {
    return userRepo.findAll();
  }

  login(email, password) {
    return userRepo.login(email, password);
  }

  logout(email, password) {
    return userRepo.logout(email, password);
  }

  getById(id) {
    return userRepo.findOne(id);
  }
}

module.exports = UserService;
