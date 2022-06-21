const fs = require('fs-js')
// beginner code to start the html page
startHtml = () => {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-6">
            <span class="navbar-brand h1 mb-3 mt-3 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`
    fs.writeFile('./pages/team.html', html, function(err) {
        if (err) {
            console.log(err)
        }
    })
    console.log('html start')
}

employeeHtml = (data) => {
    return new Promise(function(resolve, reject) {
        const name = data.getName()
        const role = data.getRole()
        const id = data.getId()
        const email = data.getEmail()
        let htmlCode = ''
        if(role == 'Employee') {
            htmlCode = `            <div class="col-md align-self-center">
            <div class="card mx-auto mt-3 mb-3" style="width: 21rem">
            <h5 class="card-header bg-secondary text-light">${name}<br /><br /> ${role}</h5>
            <ul class="list-group p-3">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
            </ul>
            </div>
        </div>`
        } if(role == 'Engineer') {
            const gitHub = data.getGitHub()
            htmlCode = `            <div class="col-md align-self-center">
            <div class="card mx-auto mt-3 bg-red-200 mb-3" style="width: 21rem">
            <h5 class="card-header bg-success text-light">${name}<br /><br />${role}</h5>
            <ul class="list-group p-3">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`
        } if(role == 'Intern') {
            const school = data.getSchool()
            htmlCode=`            <div class="col-md align-self-center">
            <div class="card mx-auto mt-3 mb-3" style="width: 21rem">
            <h5 class="card-header bg-info text-light">${name}<br /><br />${role}</h5>
            <ul class="list-group p-3">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`
        } if(role == 'Manager') {
            const number = data.getNumber()
            htmlCode=`            <div class="col-md align-self-center">
            <div class="card mx-auto mt-3 mb-3" style="width: 21rem">
            <h5 class="card-header bg-primary text-light">${name}<br /><br />${role}</h5>
            <ul class="list-group p-3">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office No.: ${number}</li>
            </ul>
            </div>
        </div>`
        }
        console.log('added employee')
        fs.appendFile('./pages/team.html', html, funciton (err), {
            if (err) {
                return reject(err)
            } 
        }); return resolve()
    })
}

finishHtml = () => {
    const html = `        </div>
    </div>            
</body>
</html>`;

    fs.appendFile('./pages/team.html', html, funciton (err), {
        if (err) {
            console.log(err)
        }
    }); console.log('finnish')
}

// html to be added when an employee is added



// code to be added when all employees are added

module.exports = {
    startHtml() {},
    employeeHtml() {},
    finishHtml() {}
}