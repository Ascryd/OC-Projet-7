
const express = require("express")
const router = express.Router()

const PostController = require("../controllers/PostController")
const auth = require("../middleware/auth")



router.post("/",  PostController.postMessage)
router.get("/",  PostController.getMessages)
// router.delete("/:id", PostController.deleteMessage)


module.exports = router