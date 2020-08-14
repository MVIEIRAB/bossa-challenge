const express = require('express')
const bodyParser = require('body-parser')

const router = require('./routes.js')

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', router)

app.listen(3000, () => {
    console.log('server has been iniciated.')
    console.log('CTRL + C: to stop the server.')
})