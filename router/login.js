const express = require("express");
const router = express.Router();

const logincontrol = require("../controller/logincontrol")

router.get("/login",logincontrol.getLogin);

router.post("/login",logincontrol.postLogin);


module.exports = router;
