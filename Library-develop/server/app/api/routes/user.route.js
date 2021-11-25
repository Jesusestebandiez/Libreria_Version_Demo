const express = require("express");
const router = express.Router();

const { createUser, login, logout } = require("../controllers/user.controller");
const { isAuth } = require("../../middlewares/auth.middleware")

router.post("/register", createUser);
router.post("/login", login);
router.post("/logout", [isAuth], logout)

module.exports = router;