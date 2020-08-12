const mongoose = require('../database/index')

const ToolsSchema = new mongoose.Schema({
    title: String,
    link: String,
    description: String,
    tags: Array
})

const Tools = mongoose.model('Tools', ToolsSchema)

module.exports = Tools