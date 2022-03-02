const db = require ("../database/db.mysql")

exports.postMessage = (req, res) => {
    const post = req.body
    const sql = "INSERT INTO post SET ?"
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
    const sql = "SELECT * FROM post ORDER BY eventDateTime DESC"
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

