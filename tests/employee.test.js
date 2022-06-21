const Employee = require("../classList.js")
const fs = require('fs-js')

jest.mock("fs");

// set an employee name
describe('employee', () => {
    it('will set name in terminal', () => {
    const name = "Rick"
    const emp = new Employee(name)
    expect(emp.name).toBe(name)
    })

    it('will set ID in terminal', () => {
        const testId = "123"
        const emp = new Employee('Rick', testId)
        expect(emp.id).toBe(testId)
    })

    it('will set email in terminal', () => {
        const testEmail = "rick.test@test.com"
        const emp = new Employee('Rick', "123", testEmail)
        expect(emp.email).toBe(testEmail)
    })

    describe('getName', () => {
        it("Can get name via getName()", () =>{
            const testName = "Rick"
            const emp = new Employee(testName)
            expect(emp.getName()).toBe(testName)
        })
    })

    describe('getId', () => {
        it("Can get employee ID via getId()", () =>{
            const testId = "123"
            const emp = new Employee('Rick', testId)
            expect(emp.getId()).toBe(testId)
        })
    })

    describe('getEmail', () => {
        it("Can get employee email via getEmail()", () =>{
            const testEmail = "rick.test@test.com"
            const emp = new Employee("Rick", "123", testEmail)
            expect(emp.getEmail()).toBe(testEmail)
        })
    })

    describe('getRole', () => {
        it("Can get employee role via getRole()", () =>{
            const testRole = "Employee"
            const emp = new Employee
        })
    })
})

// set employee id *


// set employee email *


// Get name via getName()


// Get id via getId()


// Get email via getEmail()


// getRole() returns "employee"