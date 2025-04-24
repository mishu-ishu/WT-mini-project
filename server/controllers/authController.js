// server/controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'User already exists' });

        user = new User({
            name,
            email,
            password: await bcrypt.hash(password, 10)
        });

        await user.save();
        res.status(201).json({ msg: 'User registered successfully!' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

        res.status(200).json({ msg: 'Login successful!' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
