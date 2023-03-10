const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-generation');

const teamMembers = [];

function createManager(){
    console.log('Create your Manager');
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your team managers name?'
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is the managers employee ID?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the managers email adress?'
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: 'What is the managers office number?'
        }
    ]).then((answers) => {
        const manager = new Manager(
            answers.managerName,
            answers.managerID,
            answers.managerEmail,
            answers.managerOffice
        );
        teamMembers.push(manager);
        createTeam();
    })
}

function createIntern(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is your team interns name?'
        },
        {
            type: 'input',
            name: 'internID',
            message: 'What is the interns employee ID?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the interns email adress?'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school does the intern go to?'
        }
    ]).then((answers) => {
        const intern = new Intern(
            answers.internName,
            answers.internID,
            answers.internEmail,
            answers.internSchool
        );
        teamMembers.push(intern);
        createTeam();
    })
}

function createEngineer(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your team engineers name?'
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'What is the engineers employee ID?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineers email adress?'
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the engineers github username?'
        }
    ]).then((answers) => {
        const engineer = new Engineer(
            answers.engineerName,
            answers.engineerID,
            answers.engineerEmail,
            answers.engineerGithub
        );
        teamMembers.push(engineer);
        createTeam();
    })
}

function createTeam(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeChoice',
            message: 'What type of employee would you like to make next?',
            choices: [
                'Engineer',
                'Intern',
                'Im done'
            ]
        }
    ]).then((userInput) => {
        switch(userInput.employeeChoice){
            case 'Engineer':
                createEngineer();
                break;
            case 'Intern':
                createIntern();
                break;
            default: 
                fs.writeFileSync("./dist/team.html", generatePage(teamMembers));
        }
    })
}

function startApp(){
    console.log("Welcome to the team generator!");
    createManager();
}

startApp();