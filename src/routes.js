const express = require('express')

const ToolsController = require('./controller/ToolsController')

const router = express.Router()

router.get('/listalltools', ToolsController.listAll)

router.get('/tools', ToolsController.listPerQuery)

router.post('/createtools', ToolsController.createATool)

router.delete('/tools/:id', ToolsController.deleteATool)

module.exports = router