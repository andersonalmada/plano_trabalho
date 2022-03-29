const User = require("../domain/user");
const UserService = require("../services/user-service");
var userService = new UserService();

exports.get = async (req, res) => {
  res.json(await userService.getAll());
};

exports.getById = async (req, res) => {
  res.json(await userService.getById(req.params.id));
};

exports.login = async (req, res) => {
  res.json(await userService.login(req.body.email, req.body.password));
};

exports.logout = async (req, res) => {
  res.json(await userService.logout(req.body.email, req.body.password));
};

exports.post = async (req, res) => {
  res.json(
    await userService.add(
      new User(req.body.name, req.body.email, req.body.password)
    )
  );
};

exports.put = async (req, res) => {
  res.json(
    await userService.update(
      req.body.user.id,
      new User(req.body.user.name, req.body.user.email, req.body.user.password)
    )
  );
};

exports.delete = async (req, res) => {
  res.json(await userService.delete(req.params.id));
};
