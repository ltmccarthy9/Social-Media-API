const { connect, connection } = require('mongoose');

connect('mongodb://localhost/', {
    uuseNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection