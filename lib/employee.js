// employee and basic classes

class Employee {

    constructor (eName, eId, eEmail, eRole) {
        this.name = eName
        this.id = eId
        this.email = eEmail
        this.role = eRole
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee"
    }
}



module.exports = Employee