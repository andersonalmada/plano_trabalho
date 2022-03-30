const db = require("../models");
const Plan = db.plan;
const User = db.user;

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
};

exports.findAll = async () => {
  return await Plan.findAll();
};

exports.getUsers = async () => {
  var result = null;

  try {
    return await db.sequelize.query(
      "SELECT DISTINCT ON (a.id) a.id, name FROM users a INNER JOIN plans b ON a.id = b.user_id",
      {
        model: User,
        mapToModel: true,
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
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
