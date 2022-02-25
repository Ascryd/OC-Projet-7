const express = require ("express")
const mysql = require("mysql")
const { rootCertificates } = require("tls")

const db = mysql.createConnection({
  database: "groupomania",
  host: "localhost",
  user: "root",
})

db.connect(function(err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
});



const app = express()

app.use(express.json())

app.use((req, res, next) => {  // --------------> On délare les routes possibles ect pour augmenter la sécurité
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
  });




module.exports = app