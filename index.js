const inquirer = require('inquirer')
const jest = require('jest')
const fs = require('fs-js')
const generate = require ('./src/generateHtml.js')
const Employee = require("./lib/employee.js")
const Engineer = require("./lib/engineer.js")
const Intern = require("./lib/intern.js")
const Manager = require("./lib/manager.js")
const employees = []

// questons to record employee data common to all classes
const empQuestions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Select role of Employee',
            choices: ['Employee', 'Engineer', 'Intern', 'Manager']
        },{
            type: 'input',
            name: 'name',
            message: 'Enter name of employee',
        },{
            type: 'input',
            name: 'id',
            message: 'Enter employee ID',
        },{
            type: 'input',
            name: 'email',
            message: 'Enter email of employee',
        },
        // class specific questions
    ]) .then((data) => {
        let addInfo = ''
        let eName = data.name
        let eRole = data.role
        let eId = data.id
        let eEmail = data.email

        if (eRole == "Engineer") {
            addInfo = 'gitHub'
        } else if (eRole == 'Intern') {
            addInfo = "school"
        } else if (eRole == 'Manager') {
            addInfo = 'number'
        } inquirer.prompt([
            {
            type: 'input',
            message: `Enter employee ${addInfo}`,
            name: 'addInfo',
        },{
            type: 'list',
            message: 'Add another employee?',
            name: 'addMember',
            choices: [ "Yes", "No"]
        }
        ])
        // send data to getFunctions
     .then((data) => {
        let newEmployee
        let member = data.addMember
        let eGitHub = data.github
        let eSchool = data.school
        let eNumber = data.number

        if (eRole == 'Engineer') {
            newEmployee = new Engineer (eName, eId, eEmail, eRole, eGitHub)
        } if (eRole == 'Intern') {
            newEmployee = new Intern (eName, eId, eEmail, eRole, eSchool)
        } if (eRole == 'Manager') {
            newEmployee = new Manager (eName, eId, eEmail, eRole, eNumber)
        } if (eRole == 'Employee') {
            newEmployee = new Employee (eName, eId, eEmail, eRole)
        }

        // add employeeHtml and complete page
        employees.push(newEmployee)
        employeeHtml(newEmployee)
        .then(() => {
            if(member == "Yes") {
                empQuestions()
            } else {
                finishHtml()
            }
        })
    })
})
}
// add questons that are contingent upon which role is selected for employee


// add function assigning user input to employee data and publish to html


// program start
const init = () => {
    startHtml()
    empQuestions()
    .catch((err) => console.error(err))

}

init()

module.exports = empQuestions