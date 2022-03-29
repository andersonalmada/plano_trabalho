const express = require("express");
const router = express.Router();

const controller = require("../controllers/user-controller");

router.get("/", controller.get);
router.get("/:id", controller.getById);
router.post("/login", controller.login);
router.post("/logout", controller.logout);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;
