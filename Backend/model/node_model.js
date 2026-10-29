import moongoose from 'mongoose';

// Definición del esquema para los nodos
const nodeSchema = new moongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

// Creación del modelo de nodo
const Node = moongoose.model('Node', nodeSchema);

export default Node;