import mascotasModel from '../models/mascotas.js';

class mascotasController {
    constructor() {

    }

    async create(req, res) {
        try {
            const data = await mascotasModel.create(req.body);
            res.status(201).json({ data });
        }
        catch (err) {
            res.status(500).json({ err })
        }
    }
    async update(req, res) {
        try {
            res.status(201).json({ message: 'update' });
        }
        catch (err) {
            res.status(500).json({ message: err })
        }
    }
    async getOne(req, res) {
        try {
            const data = await
                res.status(201).json({ message: 'gotONE' });
        }
        catch (err) {
            res.status(500).json({ message: err })
        }
    }
    async getAll(req, res) {
        try {
            const data = await mascotasModel.create();
            res.status(201).json({ data })
        }
        catch (err) {
            res.status(500).json({})
        }
    }

    async put(req, res) {
        try {
            res.status(201).json({ message: 'put' })
        }
        catch (err) {
            res.status(500).json({ message: err })
        }
    }

    async delete(req, res) {
        try {
            res.status(201).json({ message: 'deleted' })
        }
        catch (err) {
            res.status(500).json({ message: err })
        }
    }
}

export default new mascotasController;

