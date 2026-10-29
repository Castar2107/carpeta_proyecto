import express from 'express';
import 'dotenv/config';
import routesMascotes from './routes/mascotas.js';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/mascotas', routesMascotes);

try {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);

    })
}
catch (err) {
    console.log('Error starting the server:', err);
}


