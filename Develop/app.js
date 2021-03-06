const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


let employeeArr = [];



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// function to create manager
questionsManager();
function questionsManager() {

    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Enter manager's first and last name",
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email address?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's id number?",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?",
            }

        ]).then((answer) =>{
            const manager = new Manager(answer.name, answer.email, answer.id, answer.officeNumber)
            employeeArr.push(manager)
            addEmployee();
        });
    }

//function to create engingerr
function questionsEngineer() {

    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Enter engineer's first and last name",
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineer's email address?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the engineer's id number?",
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineer's github ID?",
            }

        ]).then((answer) =>{
            const engineer = new Engineer(answer.name, answer.email, answer.id, answer.github)
            employeeArr.push(engineer)
            addEmployee();
        });
    };


// function to create Intern
function questionsIntern(){

        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter intern's first and last name",
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the intern's email address?",
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is the intern's id number?",
                },
                {
                    type: "input",
                    name: "school",
                    message: "What school does the intern attend?",
                }
    
            ]).then((answer) =>{
                const intern = new Intern(answer.name, answer.email, answer.id, answer.school)
                employeeArr.push(intern)
                addEmployee();
            });
        };


    function addEmployee(){

        inquirer.prompt([
            {
                type: "list",
                name: "role",
                message: "Which type of employee would you like to add?",
                choices: ["Engineer","Intern", "None"]
            }
        ]).then(answer =>{
            switch(answer.role){
                case "Engineer":
                questionsEngineer();
                break;

                case "Intern":
                questionsIntern();
                break;

                default:
                    createTeam();
                                    
            }
        })
    };
    function createTeam(){
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR);
        }
        fs.writeFile(outputPath, render(answer), "utf-8")
    }


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
