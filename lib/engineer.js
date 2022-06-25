const Employee = require("./employee.js")
// Engineer classes
class Engineer extends Employee {

    constructor (eName, eId, eEmail, eGitHub, eRole) {
        super(eName, eId, eEmail)
        this.gitHub = eGitHub
        this.role = eRole
    }
    getGitHub() {
        return this.gitHub
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer