

class Employee {

    constructor (name, id, email) {
        this.name = name
        this.id = id
        this.email = email
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

class Engineer extends Employee {

    constructor (name, id, email, gitHub) {
        super(name, id, email)
        this.gitHub = gitHub
    }
    getGitHub() {
        return this.gitHub
    }
    getRole() {
        return "Engineer"
    }
}

class Intern extends Employee {

    constructor (name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}

class Manager extends Employee {

    constructor (name, id, email, number) {
        super(name, id, email)
        this.number = number
    }
    getNumber() {
        return this.number
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Employee
module.exports = Engineer
module.exports = Intern
module.exports = Manager