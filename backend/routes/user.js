const express = require("express")
const router = express.Router()

const multer = require("../middleware/multer-config")
const validation = require("../middleware/validation")
const UserController = require("../controllers/UserController")

router.post("/signup", multer, UserController.signup)
router.post("/login", UserController.login)
router.get("/infos", UserController.infos)
router.delete("/delete", UserController.delete)

module.exports = router