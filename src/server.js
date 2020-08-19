require('dotenv/config')

const cors = require('cors')
const express = require('express')
const router = require('./routes.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', router)

app.listen(process.env.PORT || 3000, () => console.log(`server has been iniciated`))