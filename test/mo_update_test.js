const Student = require('../app/student');
const assert = require('assert');

describe('Update Tests', () => {
    let updater;
    beforeEach((done) => {
        updater = new Student({ name: 'updater' })
        updater.save()
            .then(() => done())
    })
    it('Set n Save test', () => {
        updater.set('name', "Updated");
        updater.save()
            .then(() => Student.find({}))
            .then((students) => {
                assert(students[0].name !== 'updater');
                assert(students[0].name === 'Updated');
            })
    })
})