
const controllerUsuario = require("../controllers/usuario.controller");

const router = require('express').Router()






//npm install --save jsonwebtoken bcrypt cookie-parser





/************usuario */


router.post('/usuarios/identificacion', controllerUsuario.identificacion);
router.post('/usuarios/registro', controllerUsuario.registro);
router.delete('/usuarios/:id', controllerUsuario.eliminarUsuario);
router.get('/usuarios',controllerUsuario.buscarUsuarios);
router.get('/usuarios/repetidos',controllerUsuario.comprobarRepetido);
router.put("/usuarios/:id", controllerUsuario.actualizarUsuario);
router.get('/usuarios/:id',controllerUsuario.buscarUsuarioPorId);


module.exports = router