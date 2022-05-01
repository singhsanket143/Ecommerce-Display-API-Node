const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true,
        unique: true
    }
}, {timestamps: true});

const categoryModel = new mongoose.model('Category', categorySchema);

module.exports = categoryModel;