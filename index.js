const inquirer = require('inquirer')
const jest = require('jest')
const fs = require('fs-js')
const generate = require ('./generateHtml.js')
const Employee = require("./classList.js")
const Engineer = require("./classList.js")
const Intern = require("./classList.js")
const Manager = require("./classList.js")

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
        let role = data.role

        if (role == "Engineer") {
            addInfo = 'GitHub'
        } else if (role == 'Intern') {
            addInfo = "school"
        } else if (role == 'Manager') {
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
        }])
        
    }) .then((answer) => {
        let newEmployee
        let role = answer.role

        if (role == 'Engineer') {
            newEmployee = new Engineer (name, id, email, role, gitHub)
        } if (role == 'Intern') {
            newEmployee = new Intern (name, id, email, role, school)
        } if (role == 'Manager') {
            newEmployee = new Manager (name, id, email, role, number)
        } else {
            newEmployee = new Employee (name, id, email, role)
        }
        employees.push(newEmployee)
        employeeHtml(newEmployee)
        .then(() => {
            if(addMember == "Yes") {
                empQuestions()
            } else {
                finishHtml()
            }
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
