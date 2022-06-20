const fs = require('fs')

jest.mock("fs");

// in addition to employee's properties and methods, intern will have school:
describe('intern', () => {
    it('will set school in terminal', () => {
        const testSchool = "ToadSchool"
        const emp = new Intern("Rick", "123", "rick.test@test.com", testSchool)
        expect(emp.addInfo).toBe(school)
    })

    describe('getRole', () => {
        it('Can get intern role via getRole()', () => {
            const testRole = 'Intern'
            const emp = new Intern("Rick", "123", "rick.test@test.com", "ToadSchool")
            expect(emp.getRole()).toBe(testRole)
        })
    })

    it('Can get school name via getSchool()', () => {
        const testSchool = "ToadSchool"
        const emp = new Intern("Rick", "123", "rick.test@test.com", testSchool)
        expect(emp.getSchool()).toBe(testSchool)
    })
})

// getSchool()


// getRole()