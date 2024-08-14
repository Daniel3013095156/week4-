const { getAll, create, getOne, remove, update } = require('../controllers/post.controllers');
const express = require('express');
const { verifyJwt } = require('../utils/veryfyJWT');

const routerPost = express.Router();

routerPost.route('/')
    .get(getAll)
    .post(create);

routerPost.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerPost;