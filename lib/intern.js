const Employee = require("./employee.js")
// intern classes
class Intern extends Employee {

    constructor (eName, eId, eEmail, eSchool, eRole) {
        super(eName, eId, eEmail)
        this.school = eSchool
        this.role = eRole
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern