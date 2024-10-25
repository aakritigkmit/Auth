const express = require('express');
const router = express.Router();
const { register, login, logout, currentUser, getEmailVerification } = require('../controllers/users.controller.js');
const { auth } = require('../middlewares/auth.middleware.js');

router.post('/register', register);
router.post('/login', login);
router.post('/logout',auth, logout);
router.get('/user', auth, currentUser);
router.get('/publicapi',auth ,getEmailVerification);

module.exports = router;
