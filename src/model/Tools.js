const mongoose = require('../database/index')

const ToolsSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required:true
    },
    link: {
        type: String,
        required:true
    
    },
    description: {
        type: String
    },
    tags: {
        type: Array
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Tools = mongoose.model('Tools', ToolsSchema)

module.exports = Tools