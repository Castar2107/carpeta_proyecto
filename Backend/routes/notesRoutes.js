import express from 'express';
import Note from '../models/Note.js';
const router = express.Router();

//Optener todas las notas
router.get('/', (req, res) => {
    console.log("RUTA GET")
})

//Optener una nota
router.get('/:id', (req, res) => {
    console.log("OPTENER NOTA POR  ID")
})

//Crear una nota
router.post('/', (req, res) => {
    try {
        const { title, content } = req.body;
        console.log(title)
        console.log(content)
        console.log("CREANDO UNA NOTA")
    }
    catch (error) {
        console.error("Error al crear la nota:", error);
    }
})

//Eliminar una nota
router.delete('/:id', (req, res) => {
    console.log("ELIMINANDO UNA NOTA")
})
export default router;