const express = require("express")
const router = express.Router()

const UserController = require("../controllers/UserController")

router.post("/signup", UserController.signup)
router.post("/login", UserController.login)
router.get("/infos", UserController.infos)
router.delete("/delete", UserController.delete)

module.exports = router