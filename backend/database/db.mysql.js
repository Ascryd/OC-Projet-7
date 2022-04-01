const mysql = require ("mysql")

require('dotenv').config();


// Connexion à la base de données mysql/groupomania
const db = mysql.createConnection({
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})
  
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
  });

  module.exports = db