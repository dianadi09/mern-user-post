const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller')

router.get('/', UserController.getUsers)
router.get('/:id', UserController.getUsers)
router.post('/create', UserController.createUser)
router.post('/delete/:id', UserController.deleteUser)
router.post('/update/:id', UserController.updateUser)

module.exports = router;