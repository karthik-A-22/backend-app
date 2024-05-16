
const multer = require('multer');
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
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['audio/mpeg', 'audio/wav', 'audio/mp3', 'video/mp4', 'video/quicktime', 'application/pdf']; // Define allowed file types
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true); // Accept the file if its content type is allowed
    } else {
        cb(new Error('Invalid file type. Allowed types: MP3, WAV, MP4, MOV, PDF'), false); // Reject the file otherwise
    }
};

// Multer instance with content type validation and size limit
exports.upload = multer({
    storage: storage,
    fileFilter: fileFilter, // Apply content type validation
    limits: { fileSize: 20 * 1024 * 1024 } // Set maximum file size to 20MB for audio, video, and PDF files
});