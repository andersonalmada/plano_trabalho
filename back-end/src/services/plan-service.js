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
}

module.exports = PlanService;
