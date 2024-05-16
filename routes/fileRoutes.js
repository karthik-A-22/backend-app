// routes/fileRoutes.js
const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const { authenticateJWT } = require('../middleware/authMiddleware');
const { upload } = require('../middleware/uploadMiddleware');

router.get('/:filename', authenticateJWT, fileController.getFile);
router.post('/upload', authenticateJWT, upload.single('file'), fileController.uploadFile);
router.get('/', authenticateJWT, fileController.getAllFiles);

module.exports = router;
