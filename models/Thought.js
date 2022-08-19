const { Schema, Types, default: mongoose } = require('mongoose');

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

reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: new ObjectId,
      },
      reactionBody: {
        type: String,
        required: true,
        max_length: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,

      },
    },
);

//getter method to format date.