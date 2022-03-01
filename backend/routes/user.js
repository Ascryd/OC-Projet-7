const express = require("express")
const router = express.Router()

const UserController = require("../controllers/UserController")

router.post("/signup", UserController.signup)
router.get("/login", UserController.login)

module.exports = router