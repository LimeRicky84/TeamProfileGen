const inquirer = require('inquirer')
const jest = require('jest')
const fs = require('fs')
const generate = require ('./generateHtml.js')

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
        
    })
}
// add questons that are contingent upon which role is selected for employee


// add function assigning user input to employee data and publish to html


// program start
const init = () => {
    empQuestions()
    .catch((err) => console.error(err))

}

init()
