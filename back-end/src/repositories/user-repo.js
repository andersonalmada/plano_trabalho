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

exports.update = async (id, user) => {
  console.log(user);
  return await User.update(
    {
      name: user.name,
      password: user.password,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then((result) => {
      console.log("Update user");
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

exports.delete = async (id) => {
  const result = await User.destroy({
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
