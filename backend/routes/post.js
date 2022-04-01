
const express = require("express")
const router = express.Router()

const PostController = require("../controllers/PostController")
const auth = require("../middleware/auth")
const multer = require("../middleware/multer-config")


router.post("/", auth, multer, PostController.postMessage)
router.get("/",  auth, PostController.getMessages)
router.delete("/:id", auth, PostController.deleteMessage)


module.exports = router