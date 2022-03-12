
const express = require("express")
const router = express.Router()

const PostController = require("../controllers/PostController")
const auth = require("../middleware/auth")
const multer = require("../middleware/multer-config")


router.post("/", multer, PostController.postMessage)
router.get("/",  PostController.getMessages)
router.delete("/:id", PostController.deleteMessage)


module.exports = router