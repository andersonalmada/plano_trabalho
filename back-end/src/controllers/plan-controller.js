require("dotenv/config");
const Plan = require("../domain/plan");
const PlanService = require("../services/plan-service");
var planService = new PlanService();

exports.get = async (req, res) => {
  res.json(await planService.getAll());
};

exports.getUsers = async (req, res) => {
  res.json(await planService.getUsers());
};

exports.getById = async (req, res) => {
  res.json(await planService.getById(req.params.id));
};

exports.getByUser = async (req, res) => {
  res.json(await planService.getByUser(req.params.id));
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

exports.delete = async (req, res) => {
  if (req.userId == process.env.ADMIN || req.userId == req.params.id) {
    res.json(await planService.delete(req.params.id));
  } else {
    res.status(403).send();
  }
};
