const express = require('express')

const app = express()

app.listen(3000, () => {
    console.log('server has been iniciated.')
    console.log('CTRL + C: to stop the server.')
})