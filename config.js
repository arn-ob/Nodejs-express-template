const mongoose = require('mongoose');

// localhost -> Host
// 5234 -> Port
// jobs -> Database Name
const liveOrLocal = "mongodb://localhost:5234/jobs"

mongoose.Promise = Promise;

const connect = () => {
    mongoose.connect(liveOrLocal, {
        keepAlive: 1,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("mongo connected"));
    return mongoose.connection;
};

module.exports = {
    PORT: 5012,
    PATH: '/xx',
    mongodb: connect
}
