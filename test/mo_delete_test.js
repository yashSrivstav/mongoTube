const Student = require('../app/student');
const assert = require('assert');

describe('Delete Records', () => {
    let deleter;
    beforeEach((done) => {
        deleter = new Student({ name: "deleter" });
        deleter.save()
            .then(() => {
                done();
            });
    });

    it('Delete a student record from DB', (done) => {
        Student.findByIdAndDelete(deleter._id)
            .then(() => Student.findOne({ name: "deleter" }))
            .then((student) => {
                assert(student === null);
                done();
            });
    });
});