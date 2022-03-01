const mysql = require ("mysql")


// Connexion à la base de données mysql/groupomania
const db = mysql.createConnection({
    database: "groupomania",
    host: "localhost",
    user: "root",
  })
  
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
  });

  module.exports = db