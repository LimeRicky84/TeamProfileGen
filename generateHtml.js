
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
    fs.writeFile('./pages/team.html', html, funciton (err), {
        if (err) {
            console.log(err)
        }
    })
    console.log('html start')
}

// html to be added when an employee is added



// code to be added when all employees are added

module.exports = startHtml