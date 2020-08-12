const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect("mongodb+srv://dbadmin:62324883@cluster0.fuzqd.mongodb.net/<dbname>?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

module.exports = mongoose