const { Schema, model } = require('mongoose');
const reactionSchema = require('./reactions');

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        min_length: 1,
        max_length: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
    },
);

thoughtSchema.virtual('reactionCount').get(() => {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);
module.exports = Thought;
//getter method to format date.