const jwt = require("jsonwebtoken");

const jwtAuth = async(req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1];
    // check for token available or not
    if(!token) return res.status(400).json({
        error:"Unauthorized Access"
    })

    try {
        const decoded = jwt.verify(token , process.env.JWT_SECRET);
        req.user = decoded;
        return next();
    } catch (error) {
        return res.status(400).json({
            error:"Unauthorized Access"
        })
    }
}
module.exports = jwtAuth;