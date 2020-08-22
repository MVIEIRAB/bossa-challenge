const Tools = require('../model/Tools')

class ToolsController {
    async listAll(req, res) {
        try {
            const data = await Tools.find()
            return res.status(200).send({ data })
        } catch (error) {
            console.log(error)
        }
    }

    async listPerQuery(req, res) {
        try {
            const querystring = req.query
            const data = await Tools.find(querystring)

            res.status(200).json(data)

        } catch (error) {
            res.status(404).send(error)
        }
    }

    async createATool(req, res) {
        try {
            const data = req.body

            const tool = await Tools.create(data)

            res.status(201).send({ tool })
        } catch (error) {
            res.status(409).send({ error: "cannot create, try again." })
        }
    }

    async deleteATool(req, res) {
        try {
            const { id } = req.params.id
            const response = await Tools.deleteOne({ '_id': id })
            res.status(204).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = new ToolsController()