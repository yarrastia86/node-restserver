require('./config/config');


const express = require('express');
const app = express();


// Middleware de body parser incluido en express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json('Hola mundo');
});

app.get('/usuario', (req, res) => {
    res.json('get usuario');
});

app.post('/usuario', (req, res) => {
    let nombre = req.body.nombre;
    // res.json(`Post usuario de nombre: ${nombre}`);
    if (req.body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            msj: 'El nombre del usuario es necesario'
        })
    } else {
        res.json(req.body);
    }

});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json(`put usuario con id: ${id}`);
});

app.delete('/usuario/:id', (req, res) => {
    res.json('delete usuario');
});


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});