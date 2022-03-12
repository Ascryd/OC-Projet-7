const bcrypt = require("bcrypt")
const db = require ("../database/db.mysql")
const jwt = require("jsonwebtoken")


exports.signup = (req, res) => {
    bcrypt.hash(req.body.password, 10) // --------------> On hash le mdp avec Bcrypt (ici 10 fois)
    .then(hash => {
      const user = { 
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash
      }   
      return user
    })
    
    .then(user => {
      console.log(user)
      const sql = "INSERT INTO user SET ?"
      db.query(sql, user, (err, results, fields) => {
          if (err){
            console.log(err)
            res.json({err})
          } else {
            console.log(results)
            res.json({message: "Utilisateur enregistré"})
          }
      })
    })
    .catch(error => res.status(500).json({ error })) // --------------> Message si échec
}





exports.login = (req, res) => {
    const sql = "SELECT * FROM user WHERE email = ?"
    db.query(sql, req.body.email, (err, results, fields) => {
      if (err){
        console.log(err)
        res.json({err})
      } else {
        console.log(results)
        
        bcrypt.compare(req.body.password, results[0].password)  // ??
          .then (valid => {
            if (!valid) {
              return res.status(401).json ({ success: false, error: "Mot de passe incorect !"})
            } else {
              console.log("connexion autorisé")
              res.status(200).json ({
                // infos: results[0], // récupérer les infos du compte ??
                userId: results[0]._id,
                token: jwt.sign (
                  { userId: results[0]._id },
                  "RANDOM_TOKEN_SECRET",
                  { expiresIn: "24h" }
                )
              })
            }
          })
          .catch(error => res.status(501).json({ error }))
      }
    })
}
    
