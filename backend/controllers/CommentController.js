// const db = require ("../database/db.mysql")

// exports.postcomment = (req, res) => {
//     const comment = req.body
//     const sql = "INSERT INTO comments SET ?"
//     db.query(sql, comment, (err, results, fields) => {
//         if (err){
//             console.log(err)
//             res.json({err})
//         } else {
//             console.log(results)
//             res.json({message: "Commentaire enregistré"})
//         }
//     })
// }


// exports.getPostcomments = (req, res) => {

//     const sql = "SELECT * FROM comments WHERE `post_id` = ? ORDER BY eventDateTime DESC"
//     db.query(sql, (err, results, fields) => {
//         if (err){
//             console.log(err)
//             res.json({err})
//         } else {
//             console.log(results)
//             res.json({message: "Commentaires récupérés", results})
//         }
//     })
// }