const mongoose = require('mongoose');

// localhost -> Host
// 5234 -> Port
// jobs -> Database Name
const liveOrLocal = "mongodb://localhost:5234/jobs"
const port = 5012
const path = "/xx"


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
    PORT: port,
    PATH: path,
    mongodb: connect
}
