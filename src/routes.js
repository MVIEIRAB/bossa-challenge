const express = require('express')

const ToolsController = require('./controller/ToolsController')

const router = express.Router()

router.get('/list', ToolsController.listAll)

router.get('/', ToolsController.listPerQuery)

router.post('/create', ToolsController.createATool)

router.delete('/:id', ToolsController.deleteATool)

module.exports = router