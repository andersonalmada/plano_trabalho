const planRepo = require("../repositories/plan-repo");

class PlanService {
  add(subId, value) {
    return planRepo.save(subId, value);
  }

  getUsers() {
    return planRepo.getUsers();
  }

  delete(id) {
    return planRepo.delete(id);
  }

  getAll() {
    return planRepo.findAll();
  }

  getById(id) {
    return planRepo.findOne(id);
  }

  getByUser(id) {
    return planRepo.findByUser(id);
  }
}

module.exports = PlanService;
