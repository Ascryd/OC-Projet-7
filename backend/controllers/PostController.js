const db = require ("../database/db.mysql")

exports.postMessage = (req, res) => {
    const post = req.body
    // req.body.image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    console.log(post)
    const sql = "INSERT INTO messages SET ?"
    db.query(sql, post, (err, results, fields) => {
        if (err){
            console.log(err)
            res.json({err})
        } else {
            console.log(results)
            res.json({message: "Message enregistré"})
        }
    })
}


exports.getMessages = (req, res) => {
    const sql = "SELECT * FROM messages INNER JOIN user ON user._id = messages.user_id ORDER BY messages.message_id DESC"
    db.query(sql, (err, results, fields) => {
        if (err){
            console.log(err)
            res.json({err})
        } else {
            console.log(results)
            res.json({message: "Messages récupérés", results})
        }
    })
}


exports.deleteMessage = (req, res) => {
    const id = req.params.id
    const sql = "DELETE FROM messages WHERE `message_id` = ?"
    db.query(sql, id, (err, results, fields) => {
        if (err){
            console.log(err)
            res.json({err})
        } else {
            console.log(results)
            res.json({message: "Message supprimé", results})
        }
    })
}

// exports.postComment = (req, res) => {
    
//     const comment = req.body
//     const sql = "INSERT INTO messsages SET ?"
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