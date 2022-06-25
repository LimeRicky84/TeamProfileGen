const Manager = require("../lib/manager.js")
const fs = require('fs-js');


jest.mock("fs");

describe('manager', () => {
    it('will set office number in terminal', () => {
        const offNumber = "555"
        const emp = new Manager("Rick", "123", "rick.test@test.com", offNumber)
        expect(emp.number).toBe(offNumber)
    })

    describe('getRole', () => {
        it('Can get manager role via getRole()', () => {
            const testRole = 'Manager'
            const emp = new Manager("Rick", "123", "rick.test@test.com", "555")
            expect(emp.getRole()).toBe(testRole)
        })
    })

    it('Can get office number via getNumber()', () => {
        const testNumber = "555"
        const emp = new Manager("Rick", "123", "rick.test@test.com", testNumber)
        expect(emp.getNumber()).toBe(testNumber)
    })
})

// in addition to employee's properties and methods:
// Manager should set officeNumber


// getRole() should return Mangager