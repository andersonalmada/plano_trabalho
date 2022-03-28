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
  return await User.findAll();
};

exports.findOne = async (id) => {
  const result = await User.findOne({
    where: {
      id: id,
    },
  });
  return result;
};

exports.login = async (email, password) => {
  const result = await User.findOne({
    where: {
      email: email,
      password: password,
    },
  });
  return result;
};

exports.logout = async (email, password) => {
  const result = await User.findOne({
    where: {
      email: email,
      password: password,
    },
  });
  return result;
};
