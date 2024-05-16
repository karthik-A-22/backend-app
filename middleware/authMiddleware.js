// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

exports.authenticateJWT = (req, res, next) => {
    // Get token from request headers
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    // Verify JWT token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }
        // Token is valid, proceed to next middleware or route handler
        req.userId = decoded.userId; // Optionally, you can attach the user ID to the request object
        next();
    });
};
