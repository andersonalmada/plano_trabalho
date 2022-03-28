const planRepo = require("../repositories/plan-repo");

class PlanService {
  add(subId, value) {
    return planRepo.save(subId, value);
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
