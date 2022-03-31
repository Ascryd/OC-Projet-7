const bcrypt = require("bcrypt")
const db = require ("../database/db.mysql")
const jwt = require("jsonwebtoken")
const fs = require("fs")

const fsResultHandler = function(err) { 
  if(err) {
     console.log("unlink failed", err);
  } else {
     console.log("file deleted");
  }
} 


exports.signup = (req, res) => {
    // console.log(req.body);
    bcrypt.hash(req.body.password, 10) // --------------> On hash le mdp avec Bcrypt (ici 10 fois)
    .then(hash => {
      console.log(req.file.filename);
      const user = {
        ...req.body,
        password: hash,
        imageProfilUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      }
      return user
    })
    
    .then(user => {
      console.log(user)
      const sql = "INSERT INTO user SET ?"
        db.query(sql, user, (err, results, fields) => {
            if (err) {
              console.log(err)
              res.status(412).json({ err, message: "Adresse email déjà enregistrée"})
              fs.unlink(`images/${user.imageProfilUrl}`, fsResultHandler)
            } else {
              console.log(results)
              res.json({message: "Utilisateur enregistré"})
            }
        })
    })
    .catch(error => res.status(412).json({ error, message: "Veuillez remplir tous les champs et choisir une photo de profil" })) // --------------> Message si échec
}





exports.login = (req, res) => {
    const sql = "SELECT * FROM user WHERE email = ?"
    console.log(req.body.email);
    db.query(sql, req.body.email, (err, results, fields) => {
      console.log(results);
      if (err) {
        console.log(err)
        res.status(500).json({err})
      } else if (!results[0]) {
        console.log(err + " aucune adresse mail trouvé !")
        res.status(500).json({err, message:"Adresse mail introuvable"})
      } else {
        console.log("Le résultat de la requête :  " + JSON.stringify(results))
        
        bcrypt.compare(req.body.password, results[0].password)
          .then (valid => {
            if (!valid) {
              return res.status(401).json ({ success: false, message: "Mot de passe incorrect !"})
            } else {
              console.log("connexion autorisé")
              res.status(200).json ({
                userId: results[0]._id,
                token: jwt.sign (
                  { userId: results[0]._id },
                  "RANDOM_TOKEN_SECRET",
                  { expiresIn: "24h" }
                )
              })
            }
          })
          .catch(error => res.status(500).json({ error }))
      }
    })
}

exports.infos = (req, res) => {
  const token = req.headers.authorization
  const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET")
  const userId = decodedToken.userId
  const sql = "SELECT firstName, lastName, email, imageProfilUrl, securityLevel, _id FROM user WHERE `_id` = ?"
  db.query(sql, userId, (err, results, fields) => {
    if (err){
        console.log(err)
        res.json({err})
    } else {
        console.log(results)
        res.json({message: "Infos récupérées", results})  
    }
  })
}

exports.delete = (req, res) => {
  const token = req.headers.authorization
  const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET")
  const userId = decodedToken.userId


    const sqlGetAllImages = "SELECT imageUrl FROM messages WHERE user_id = ?"
    db.query(sqlGetAllImages, userId, (err, results, fields) => {
      if (err){
        console.log(err)
      } else {
        results.forEach(result => {
          console.log("résultat unique");
          const fileName = result.imageUrl.split("/images/")[1]
          fs.unlink(`images/${fileName}`, fsResultHandler)
        })

        const sqlGetImageProfil = "SELECT imageProfilUrl FROM user WHERE _id = ?"
        db.query(sqlGetImageProfil, userId, (err, results, fields) => {
          if (err){
            console.log(err)
          } else {
            console.log(results)
            const fileName = results[0].imageProfilUrl.split("/images/")[1]
            fs.unlink(`images/${fileName}`, fsResultHandler)
              
            const sql = "DELETE FROM user WHERE _id = ?"
              db.query(sql, userId, (err, results, fields) => {
                if (err){
                  console.log(err)
                  res.json({err})
              } else {
                  console.log(results)
                  res.json({message: "Compte supprimé", results})  
              }
            })
      
          }
        })
      }
    })



}