const { User, Thought } = require('../models');

module.exports = {
    //get all users
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    //get a user
    getSingleUser(req, res) {
        User.findOne({_id: req.params.userID})
        .select('-__v')
        .then((user) =>
            !user
            ? res.status(404).json({ message: 'No user with that ID'})
            : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // post a new user
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    // update a user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userID },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) => 
        !user
        ? res.status(404).json({ message: 'No user with that ID' })
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // delete a user
    deleteUser(req, res) {
        User.findOneAndDelete({_id: req.params.userID})
        .then((user) => 
        !user
            ? res.status(404).json({ message: 'No user with that ID'})
            : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
};