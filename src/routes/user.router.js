const { getAll, create, getOne, remove, update, login, logged } = require('../controllers/user.controllers');
const express = require('express');
const { verifyJwt } = require('../utils/veryfyJWT');


const routerUser = express.Router();

routerUser.route('/')
    .get(verifyJwt, getAll)// proteger
    .post(create);

routerUser.route('/login')
    .post(login)

routerUser.route('/me') //logearse
    .get(verifyJwt,logged)
    
routerUser.route('/:id')

    .get(verifyJwt, getOne) //proteger
    .delete(remove)
    .put(update);

module.exports = routerUser;