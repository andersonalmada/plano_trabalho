const Plan = require("../domain/plan");
const PlanService = require("../services/plan-service");
var planService = new PlanService();

exports.get = async (req, res) => {
  res.json(await planService.getAll());
};

exports.getById = async (req, res) => {
  res.json(await planService.getById(req.params.id));
};

exports.post = async (req, res) => {
  let plan = req.body.plan;

  for (let i = 0; i < plan.length; i++) {
    await planService.add(
      req.body.user,
      new Plan(plan[i].id, plan[i].subcategory)
    );
  }

  res.json("Created");
};
