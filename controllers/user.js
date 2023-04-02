const { response } = require('express');


const usuariosGet = (req, res = response) => {

    const { q, nombre = "no name" } = req.query;

    res.json({
        msg: "get API - controlador",
        q,
        nombre
    })
}

const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: "post API - controlador",
        nombre,
        edad
    })
}

const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.status(201).json({
        msg: "put API - controlador",
        id: id
    })
}

const usuariosPatch = (req, res) => {
    res.status(201).json({
        msg: "patch API - controlador"
    })
}

const usuariosDelete = (req, res) => {
    res.status(201).json({
        msg: "delete API - controlador"
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}