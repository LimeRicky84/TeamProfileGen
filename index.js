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
            choices: ['employee', 'engineer', 'intern', 'manager']
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
        }
    ])
}
// add questons that are contingent upon which role is selected for employee


// add function assigning user input to employee data and publish to html


// program start
const init = () => {
    empQuestions()
    .then(() => console.log("You've Entered An Employee For No Reason!"))
    .catch((err) => console.error(err))
}

init()
