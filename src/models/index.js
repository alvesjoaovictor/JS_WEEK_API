const { connect, Mongoose } = require('mongoose');
const MONGODB_URL = process.env.DATABASE

//console.log(MONGODB_URL)

module.exports = () => {
    const options = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    };
    return connect(MONGODB_URL, options );
}