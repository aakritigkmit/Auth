const jwt = require("jsonwebtoken");
const {
	registerUser,
	loginUser,
	currentUser,
	checkEmailValidity
	
} = require("../services/users.service.js");

const axios = require('axios');
exports.register = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const { token, user } = await registerUser({ name, email, password });
		res.status(201).json({ token, user });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const { token, user } = await loginUser({ email, password });
		res.json({ token, user });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
exports.currentUser = (req, res) => {
	res.json(req.user);
};
exports.logout = (req, res) => {
	res.json({
		message:
			"Logged out successfully. Please remove the token from client storage.",
	});
};



exports.getEmailVerification = async (req, res) => {
  const { email } = req.body;
    if (!email) {
    return res.status(400).json({ message: 'email is required.' });
  }
  try {
    const verifyemail = await checkEmailValidity(email);
    res.json();
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to  verify email' });
  }
};