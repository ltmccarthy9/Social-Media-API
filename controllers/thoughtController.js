const { Thought } = require('../models');

module.exports = {
    //get all thoughts
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    // get a single thought
    getSingleThought(req, res) {
        Thought.findOne({_id: req.params.thoughtID})
        .select('-__v')
        .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'No thought with that ID'} )
            : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
      // post a new thought
      createThought(req, res) {
        Thought.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
    // update a thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtID },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((thought) => 
        !thought
        ? res.status(404).json({ message: 'No thought with that ID' })
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
     // delete a thought
     deleteThought(req, res) {
        Thought.findOneAndDelete({_id: req.params.thoughtID})
        .then((thought) => 
        !thought
            ? res.status(404).json({ message: 'No thought with that ID'})
            : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create a new reaction
    createReaction(req, res) {
        var reaction = req.body;
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtID },
            { $push: { reactions: reaction }}
        )
        .then((thought) => 
        !thought || !reaction
        ? res.status(404).json({ message: 'No thought or reaction with that ID' })
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
        
    },
    deleteReaction(req, res) {
        var reaction = req.params.reactionID;
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtID },
            { $pull: { reactions: reaction }}
        )
        .then((thought) => 
        !thought || !reaction
        ? res.status(404).json({ message: 'No thought or reaction with that ID' })
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
};