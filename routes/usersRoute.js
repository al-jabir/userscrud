const { getUsers, createUsers, updateUsers, deleteUsers, getUsersById } = require('../controllers/usersController');

const usersRoute = require('express').Router();

usersRoute.get('/users', getUsers);
usersRoute.get('/users/:id', getUsersById);
usersRoute.post('/users', createUsers);
usersRoute.put('/users/:id', updateUsers);
usersRoute.delete('/users/:id', deleteUsers);

module.exports = usersRoute;
