const express = require ("express")
const mysql = require("mysql")
const db = require("./database/db.mysql.js")
const path = require("path")

const userRoutes = require("./routes/user")
const postRoutes = require("./routes/post")






const app = express()

app.use(express.json())


//On délare les routes possibles ect pour augmenter la sécurité
app.use((req, res, next) => {  
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
  });


app.use("/images", express.static(path.join(__dirname, 'images')))


// On importe les routes/api
app.use("/api/auth", userRoutes)
app.use("/api/post", postRoutes)


module.exports = app