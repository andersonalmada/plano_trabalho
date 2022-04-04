require("dotenv/config");
const jwt = require("jsonwebtoken");
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
  const login = await userService.login(req.body.email, req.body.password);

  if (login) {
    let id = login.id;
    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 3600,
    });
    return res.json({ token: token });
  }

  res.status(403).send();
};

exports.logout = async (req, res) => {
  res.json({ token: null });
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
