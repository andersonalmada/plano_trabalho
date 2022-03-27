const User = require("../domain/user");
const UserService = require("../services/user-service");
var userService = new UserService();

exports.get = async (req, res) => {
  res.json(await userService.getAll());
};

exports.getById = async (req, res) => {
  res.json(await userService.getById(req.params.id));
};

exports.post = async (req, res) => {
  res.json(
    await userService.add(
      new User(req.body.name, req.body.email, req.body.password)
    )
  );
};
