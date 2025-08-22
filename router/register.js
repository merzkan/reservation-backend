const express = require("express");
const router = express.Router();

const registercontrol = require("../controller/registercontrol")

router.get("/register",registercontrol.getRegister);

router.post("/register",registercontrol.postRegister)

module.exports = router;
