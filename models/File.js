// models/File.js
const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    filename: String,
    contentType: String,
    size: Number,
    data: Buffer
});

module.exports = mongoose.model('File', fileSchema);
