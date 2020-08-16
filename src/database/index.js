require('dotenv/config')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

module.exports = mongoose