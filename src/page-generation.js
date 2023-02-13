function generateManager(manager){
    return `
    <div class="card">
        <h2>${manager.getName()}</h2>
        <h3>${manager.getRole()}</h3>
        <ul>
            <li>ID: ${manager.getId()}</li>
            <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li>Office Number: ${manager.getOfficeNumber()}</li>
        </ul>    
    </div>`;
}

function generateEngineer(engineer){
    return `
    <div class="card">
        <h2>${engineer.getName()}</h2>
        <h3>${engineer.getRole()}</h3>
        <ul>
            <li>ID: ${engineer.getId()}</li>
            <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li>Office Number: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        </ul>    
    </div>`;
}

function generateIntern(intern){
    return `
    <div class="card">
        <h2>${intern.getName()}</h2>
        <h3>${intern.getRole()}</h3>
        <ul>
            <li>ID: ${intern.getId()}</li>
            <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li>Office Number: ${intern.getSchool()}</li>
        </ul>    
    </div>
    `;
}

function generateTeam(team){
    const teamHtml = [];

    team.forEach(member => {
        if(member.getRole() === 'Manager'){
            teamHtml.push(generateManager(member));
        }
    });
    team.forEach(member => {
        if(member.getRole() === 'Engineer'){
            teamHtml.push(generateEngineer(member));
        }
    });
    team.forEach(member => {
        if(member.getRole() === 'Intern'){
            teamHtml.push(generateIntern(member));
        }
    });

    return teamHtml.join("");
}

function generatePage(team){
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1 class="text-center">My Team</h1>
    </header>
    <div class="container">
        <div class="row">
            <div class="team-area"> 
                ${generateTeam(team)}
            </div>
        </div>
    </div>
    
</body>
</html>
`;
}

module.exports = generatePage;