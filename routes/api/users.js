const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    createFriend,
    deleteFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userID
router.route('/:userID').get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:userID/friends/:friendID
router.route('/:userID/friends/:friendID').post(createFriend).delete(deleteFriend);

module.exports = router;
