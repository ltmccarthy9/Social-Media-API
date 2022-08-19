const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            max_length: 50,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            //validate email address
        },
        thoughts: [thoughtsSchema],
        friends: [userSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
    },
);

userSchema.virtual('friendCount').get(() => {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;