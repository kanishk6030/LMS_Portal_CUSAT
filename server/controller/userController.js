const User = require("../models/user.js");

exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        return res.status(200).json(allUsers);
    } catch (err) {
        console.error(err);
        return res.status(400).json({ error: err.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const userById = await User.findById(id);

        if (!userById) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json(userById);
    } catch (err) {
        console.error(err);
        return res.status(400).json({ error: err.message });
    }
};
