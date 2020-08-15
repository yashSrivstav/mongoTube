const Student = require('../app/student');
const assert = require('assert');
describe("Read Tests", () => {
    let reader;
    beforeEach((done) => {
        reader = new Student({ name: "Reader" });
        reader.save()
            .then(() => {
                done();
            })
    })
    it("Read a user: Reader", (done) => {
        Student.find({ name: "Reader" })
            .then((students) => {
                // id is a BSON value
                assert(reader._id.toString() === students[0]._id.toString());
                done();
            });
    });
});