const Student = require('../app/student');
const assert = require('assert');
describe('Create records', () => {
    it('create a user in DB', () => {
        // assert(true); 
        const sam = new Student({ name: "Yash" });
        sam.save()
            .then(() => {
                assert(!sam.isNew)
            })
            .catch(() => {
                console.log("error");
            })
    });
});

