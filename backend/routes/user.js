const express = require("express")
const router = express.Router()

const UserController = require("../controllers/UserController")

router.post("/signup", UserController.signup)
router.post("/login", UserController.login)
// router.get("/:id", UserController.infos)

module.exports = router