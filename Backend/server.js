import express from 'express';
import router from './routes/notesRoutes.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const app = express();

// PORT definido en el archivo .env o puerto alternativo 3000
const PORT = process.env.PORT || 3000;
//Middleware
app.use(express.json());
app.use('/notas', router);
process.env.MONGO_DB_URI

mongoose.connect(process.env.MONGO_DB_URI).then(() => {
    console.log("Conectado a la base de datos");
    app.listen(PORT, () => {
        console.log(`Servidor levantado en http://localhost:${PORT}`);
    }).catch((error) => {
        console.error("Error al conectar a la base de datos:", error);
    })
});

app.listen(PORT, () => {
    console.log(`Servidor levantado en http://localhost:${PORT}`);
});