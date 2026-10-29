import express from "express";

// Crear una instancia de la aplicación Express
const app = express();

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

const usuarios = [
    {
        id: 1,
        nombre: "Juan",
    },
    {
        id: 2,
        nombre: "María",
    },
];
app.get("/", (req, res) => {
    res.send("");
});

// Endpoint para crear un nuevo usuario
app.post("/usuarios", (req, res) => {
    const nuevoUsuario = {
        ...req.body,
        id: usuarios.length + 1,
    };
    console.log(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
});

app.put("/usuarios/:id", (req, res) => {
    const userid = parseInt(req.params.id);
    const usuarioIndex = usuarios.findIndex(user => user.id === userid);
    usuaris[usuarioIndex] = {
        ...usuarios[usuarioIndex],
        ...req.body,
    };

    if (usuarioIndex === -1) {
        res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.json(usuarios[usuarioIndex]);
});


app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

app.delete("/usuarios/:id", (req, res) => {
    const userid = parseInt(req.params.id);
    const usuarioIndex = usuarios.findIndex(user => user.id === userid);

    if (usuarioIndex === -1) {
        res.status(404).json({ error: "Usuario no encontrado" });
        return;
    }

    usuarios.splice(usuarioIndex, 1);
    res.status(204).json({ message: "Usuario eliminado" });
});

app.get("/usuarios/:id", (req, res) => {
    const userid = parseInt(req.params.id);
    const usuario = usuarios.find(user => user.id === userid);
    console.log(usuario);
    //find usuario by id
});



const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
