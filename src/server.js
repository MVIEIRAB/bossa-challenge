const express = require('express')
const bodyParser = require('body-parser')

const router = require('./routes.js')

const app = express()

const port = 3000

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', router)

app.listen(port, () => console.log(`server has been iniciated and listening on port: ${port}`))