const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //ES6 - promise

before((done) => {
    mongoose.connect("mongodb://localhost/mongotube", { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection
        .once('open', () => {
            // console.log('Connected');
            done();
        })
        .on('error', (error) => {
            console.log("Your Error", error);
        });
});

beforeEach((done) => {
    mongoose.connection.collections.students.drop(() => {
        console.log("Drop is done");
        done();
    });
});

