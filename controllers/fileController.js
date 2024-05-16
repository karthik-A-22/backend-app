// controllers/fileController.js
const File = require('../models/File');

exports.uploadFile = async (req, res) => {
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

exports.getAllFiles = async (req, res) => {
    try {
        const files = await File.find();
        return res.status(200).json(files);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
