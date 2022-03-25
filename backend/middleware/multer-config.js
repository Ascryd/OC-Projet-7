const multer = require("multer")

const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png"
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "images")
    },
    filename: (req, file, callback) => {
        // console.log(file);
        // console.log("test");
        const name = file.originalname.split(' ').join("_")  // Laisse le .jpg ?
        const extension = MIME_TYPES[file.mimetype]
        callback(null, name + Date.now() + "." + extension)
    }
})

console.log("bonjour");

module.exports = multer({ storage }).single("imageUrl")