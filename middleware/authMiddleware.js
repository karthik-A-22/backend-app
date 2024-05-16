// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const _ = require('lodash');

exports.authenticateJWT = (req, res, next) => {
    // Get token from request headers
    const authHeader = _.get(req, 'headers.authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    // Extract token from header
    const token = authHeader.split(' ')[1];

    // Verify JWT token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }
        // Token is valid, proceed to next middleware or route handler
        req.userId = _.get(decoded, 'userId'); // Optionally, you can attach the user ID to the request object
        next();
    });
};
