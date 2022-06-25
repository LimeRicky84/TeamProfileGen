const Employee = require("./employee.js")
// Manager classes
class Manager extends Employee {

    constructor (eName, eId, eEmail, eNumber, eRole) {
        super(eName, eId, eEmail)
        this.number = eNumber
        this.role = eRole
    }
    getNumber() {
        return this.number
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager