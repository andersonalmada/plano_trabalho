const express = require("express");
const router = express.Router();

const controller = require("../controllers/plan-controller");

router.get("/", controller.get);
router.get("/user/:id", controller.getByUser);
router.get("/:id", controller.getById);
router.post("/", controller.post);

module.exports = router;
