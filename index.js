const inquirer = require('inquirer')
const jest = require('jest')
const fs = require('fs-js')
const generate = require ('./generateHtml.js')
const Employee = require("./classList.js")
const Engineer = require("./classList.js")
const Intern = require("./classList.js")
const Manager = require("./classList.js")
const employees = []

// questons to record employee data
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
    ]) .then((data) => {
        let addInfo = ''
        let eRole = data.role

        if (eRole == "Engineer") {
            addInfo = 'GitHub'
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
        
     .then((data) => {
        let newEmployee
        let member = data.addMember

        if (eRole == 'Engineer') {
            newEmployee = new Engineer (data.name, data.id, data.email, eRole, data.gitHub)
        } if (eRole == 'Intern') {
            newEmployee = new Intern (data.name, data.id, data.email, eRole, data.school)
        } if (eRole == 'Manager') {
            newEmployee = new Manager (data.name, data.id, data.email, eRole, data.number)
        } if (eRole == 'Employee') {
            newEmployee = new Employee (data.name, data.id, data.email, eRole)
        }
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