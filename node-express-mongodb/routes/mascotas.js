import express from 'express';
import mascotasController from '../controllers/mascotas.js';
const route = express.Router();

route.post('/', mascotasController.create);
route.post('/:id', mascotasController.getOne);
route.post('/', mascotasController.getAll);
route.post('/:id', mascotasController.update);
route.post('/:id', mascotasController.delete);

export default route;