const db = require("../models");
const Plan = db.plan;

exports.save = async (userId, plan) => {
  const result = await Plan.findOne({
    where: {
      userId: userId,
      subcategoryId: plan.id,
    },
  }).then(function (obj) {
    if (obj) {
      console.log("Updated plan");
      return obj.update({
        value: plan.value,
      });
    } else {
      // insert
      return Plan.create({
        userId: userId,
        subcategoryId: plan.id,
        value: plan.value,
      })
        .then((result) => {
          console.log("Created plan: " + JSON.stringify(result));
          return result;
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    }
  });
  return result;
  /*
  return await Plan.findOne({
    where: {
      id: 23,
    },
  }).then(function (obj) {
    // update
    if (obj) {
      return Plan.update({
        subcategoryId: plan.id,
        value: plan.value,
      })
        .then((result) => {
          console.log("Update plan: " + JSON.stringify(result));
          return result;
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    } else {
      // insert
      return Plan.create({
        userId: userId,
        subcategoryId: plan.id,
        value: plan.value,
      })
        .then((result) => {
          console.log("Created plan: " + JSON.stringify(result));
          return result;
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    }
  });
  */
};

exports.findAll = async () => {
  return await Plan.findAll();
};

exports.findOne = async (id) => {
  const result = await Plan.findOne({
    where: {
      id: id,
    },
  });
  return result;
};

exports.findByUser = async (id) => {
  const result = await Plan.findAll({
    where: {
      userId: id,
    },
  });
  return result;
};
