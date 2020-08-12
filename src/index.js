const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const app = express()

const Tools = require('./model/Tools')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

router.get('/list', async (req, res) => {
    try {
        const data = await Tools.find()
        return res.send({ data })
    } catch (error) {
        console.log(error)
    }
})

router.get('/tools?tag="qual é a tag?', async (req, res) => {

})

router.post('/createtools', async (req, res) => {
    try {
        const data = req.body

        const tool = await Tools.create(data)

        res.status(201).send({ tool })
    } catch (error) {
        res.status(409).send({ error: "cannot create, try again." })
    }
})

router.delete('/tools/:id', async (req, res) => {
    try {
        const id = req.params.id
        const response = await Tools.deleteOne({ '_id': id })
        res.status(204).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})

app.use('/', router)

app.listen(3000, () => {
    console.log('server has been iniciated.')
    console.log('CTRL + C: to stop the server.')
})