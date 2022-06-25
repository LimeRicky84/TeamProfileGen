const Engineer = require("../lib/engineer.js")

const fs = require('fs-js')

jest.mock("fs");

describe('engineer', () => {
    it('will set github name in terminal', () => {
        const testGitHub = "RickyTickyToc"
        const emp = new Engineer("Rick", "123", "rick.test@test.com", testGitHub)
        expect(emp.gitHub).toBe(testGitHub)
    })

    describe('getRole', () => {
        it('Can get engineer role via getRole()', () => {
            const testRole = 'Engineer'
            const emp = new Engineer("Rick", "123", "rick.test@test.com", "RickyTickyToc")
            expect(emp.getRole()).toBe(testRole)
        })
    })

    it('Can get github name role via getGithub()', () => {
        const testGitHub = "RickyTickyToc"
        const emp = new Engineer("Rick", "123", "rick.test@test.com", testGitHub)
        expect(emp.getGitHub()).toBe(testGitHub)
    })
})

// in addition to employee properties and methods:
// engineer should set github


// getGithub()


// getRole() should return engineer