const { User } = require('../models');

module.exports = {
    //get all users
    getUsers(req, res) {
        User.find({})
        .select('-__v')
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
        .catch((err) => res.status(500).json(err));
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
    // add friend to friend list
    createFriend(req, res) {
        var friend = findOne({ _id: req.params.friendID});
        User.findOneAndUpdate(
            { _id: req.params.userID},
            { $push: { friends: friend }}
        )
        .then((user) =>
        !user || !friend
        ? res.status(404).json({ message: "No user or friend with that ID"})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // remove friend from friend list
    deleteFriend(req, res) {
        var friend = findOne({ _id: req.params.friendID});
        User.findOneAndUpdate(
            { _id: req.params.userID},
            { $pull: { friends: friend }}
        )
        .then((user) =>
        !user || !friend
        ? res.status(404).json({ message: "No user or friend with that ID"})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
};