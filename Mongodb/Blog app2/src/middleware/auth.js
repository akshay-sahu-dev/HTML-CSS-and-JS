const jwt = require('jsonwebtoken');

const auth = function (req,res,next) {
    const token = req.header('token');
    if(!token) return res.status(401).json({message: 'Please login!!', error:[],data:{}});
    try {
        const decoded = jwt.verify(token,'jwt_secret');
        req.user = decoded;
        next();
    } catch (e) {
        console.error(e);
        res.status(403).json({message: 'Authentication failed', error:"Invalid Token"});
    }
}

module.exports = auth;
