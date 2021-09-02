const express = require("express");
const router = express.Router();

const controller = require("../controllers/paciente-controller");

router.get("/", controller.get);
router.get("/search", controller.getByEstado);
router.get("/getnum", controller.getByNum);
router.get("/:id", controller.getById);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;
