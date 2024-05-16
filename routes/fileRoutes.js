// routes/fileRoutes.js
const express = require('express');
const multer = require('multer');
const router = express.Router();
const fileController = require('../controllers/fileController');
const { authenticateJWT } = require('../middleware/authMiddleware');
const fs = require('fs');

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = 'uploads/';
        // Create uploads directory if it doesn't exist
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir); // Save files to the 'uploads' directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname) // Generate unique filenames
    }
});
const upload = multer({ storage: storage });

router.get('/:filename', authenticateJWT, fileController.getFile);
router.post('/upload', authenticateJWT, upload.single('file'), fileController.uploadFile);
router.get('/', authenticateJWT, fileController.getAllFiles);

module.exports = router;
