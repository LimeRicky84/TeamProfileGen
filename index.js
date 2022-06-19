const inquirer = require('inquirer')
const jest = require('jest')
const fs = require('fs')


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


