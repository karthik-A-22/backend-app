// controllers/fileController.js
// controllers/fileController.js
const multer = require('multer');
const File = require('../models/File');

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Save files to the 'uploads' directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname) // Generate unique filenames
    }
});

const upload = multer({ storage: storage });

exports.uploadFile = upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }
        const { originalname, mimetype, size, filename } = req.file;
        // Save file metadata to MongoDB
        await File.create({ filename: originalname, contentType: mimetype, size, path: req.file.path });
        return res.status(200).json({ message: "File uploaded successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


exports.getFile = async (req, res) => {
    try {
        const filename = req.params.filename;
        const file = await File.findOne({ filename });
        if (!file) {
            return res.status(404).json({ message: "File not found" });
        }
        res.setHeader('Content-Type', file.contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${file.filename}"`);
        return res.send(file.data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
