// routes/fileRoutes.js
const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const { authenticateJWT } = require('../middleware/authMiddleware');

router.post('/upload', authenticateJWT, fileController.uploadFile);
router.get('/:filename', authenticateJWT, fileController.getFile);

module.exports = router;
