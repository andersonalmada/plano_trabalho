const express = require("express");
const router = express.Router();

const controller = require("../controllers/category-controller");

router.get("/", controller.get);
router.get("/:id", controller.getById);
router.post("/all", controller.postAll);
router.post("/", controller.post);

module.exports = router;
