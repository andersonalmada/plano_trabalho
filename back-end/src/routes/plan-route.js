const express = require("express");
const router = express.Router();

const controller = require("../controllers/plan-controller");

router.get("/users", controller.getUsers);
router.get("/", controller.get);
router.get("/user/:id", controller.getByUser);
router.get("/:id", controller.getById);
router.post("/", controller.post);
router.delete("/user/:id", controller.delete);

module.exports = router;
