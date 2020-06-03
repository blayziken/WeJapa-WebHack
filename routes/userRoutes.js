const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.signup)

router.get('/login', authController.login)

router.get('/findAllUsers', authController.findAllUsers)

// router.route('/')
// .get(authController.getAllUsers)
// .post(authController.createUser)

// router.route('/:id')
// .get(authController.getUser)
// .patch(authController.updateUser)
// .delete(authController.deletUser)


module.exports = router