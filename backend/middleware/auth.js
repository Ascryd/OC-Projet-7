
const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET")
        const userId = decodedToken.userId
        
        if (req.body.userId && req.body.userId !== userId) {
            console.log("problème ID");
            throw "ID invalide"
        } else {
            console.log("Connexion autorisé avec token");
            next()
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: error | "Requête non authentifiée !" })
    }
}