import { Collection } from "tinacms";

const Producto: Collection = {
    name: "producto",
    label: "Productos",
    path: "content/productos",
    fields: [
        {
            name: 'nombre',
            label: 'Nombre',
            type: 'string',
            isTitle: true,
            required: true,
        },
        {
            name: 'descripcion',
            label: 'Descripción',
            type: 'rich-text',
            required: false,
            isBody: true,
        },
        {
            name: 'precio',
            label: 'Precio',
            type: 'number',
            required: false,
        },
        {
            name: 'imagenUrl',
            label: 'URL de la imagen',
            type: 'string',
            required: true,
        },
        {
            name: 'categoria',
            label: 'Categoría',
            type: 'string',
            required: false,
        },
        {
            name: 'cantidad',
            label: 'Cantidad',
            type: 'number',
            required: true
        }
    ]
};

export default Producto;
