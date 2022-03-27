const db = require("../models");
const User = db.user;

exports.save = async (user) => {
  return User.create({
    name: user.name,
    email: user.email,
    password: user.password,
  })
    .then((result) => {
      console.log("Created user: " + JSON.stringify(result));
      return result;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.findAll = async () => {
  return await user.findAll();
};

exports.findOne = async (id) => {
  const result = await user.findOne({
    where: {
      id: id,
    },
  });
  return result;
};
