// middleware/auth.js
import jwt from 'jsonwebtoken';
const verifyToken = (req, res, next) => {
    const token = JSON.parse(req.header('Authorization'));    
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, process.env.tokenId);
        req.userid = decoded._id;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};
export default verifyToken;
