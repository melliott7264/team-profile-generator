const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

function  getEmployeeInput() {
    console.log("Please answer the following questions about each of your team members:")
    
    inquirer
    .prompt(
        {
            type:   "list",
            name:   "role",
            message: "Please select the employee's role:  ",
            choices: ["Manager", "Engineer", "Intern"]
            }
    )
    .then(({role}) => {
        switch (role) {
            case "Manager":
                getManagerInput();
                break;
            case "Engineer":
                getEngineerInput();
                break;
            case "Intern":
                getInternInput();
                break;
        }
    });
};

function checkForMoreInput() {
    inquirer
    .prompt({
        type: "confirm",
        name: "moreEmployees",
        message: "Do you have any more team members to enter?",
        default:  false
    })
    .then(({moreEmployees}) => {
        if (moreEmployees) {
            getEmployeeInput();
        } else {
            buildPage();
        }
    });
};

function  getManagerInput() {
    inquirer
    .prompt([
        {
            type: "input",
            name:  "name",
            message:   "Please enter the Manager's name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name for your Manager!');
                    return false;
                }
            }
        },
        {
            type: "number",
            name: "id",
            message: "Please enter your Manager's employee ID.",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter a number for your Manager's employee ID!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter you Manager's e-mail address.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter a valid e-maill address for your Manager!");
                    return false;
                }
            }
        },
        {
            type: "number",
            name: "office",
            message: "Please enter your Manager's office number.",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter an office number for your Manager!");
                    return false;
                }
            }

        }
    ])
    .then((inputDataArray) => {
        const manager = new Manager (inputDataArray.name, inputDataArray.id, inputDataArray.email, inputDataArray.office);

        // manager.id = inputDataArray.id;
        // manager.email = inputDataArray.email;
        // manager.officeNumber = inputDataArray.office;

        teamArray.push(manager);

        checkForMoreInput();
    });
    };
  function  getEngineerInput() {
    inquirer
    .prompt([
        {
            type: "input",
            name:  "name",
            message:   "Please enter the Engineer's name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name for your Engineer!');
                    return false;
                }
            }
        },
        {
            type: "number",
            name: "id",
            message: "Please enter your Engineer's employee ID.",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter a number for your Engineer's employee ID!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter you Engineer's e-mail address.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter a valid e-maill address for your Engineer!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "gitHub",
            message: "Please enter your Engineer's GitHub username.",
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log("Please enter the GitHub username for your Engineer!");
                    return false;
                }
            }

        }
    ])
    .then((inputDataArray) => {
        const engineer = new Engineer (inputDataArray.name, inputDataArray.id, inputDataArray.email, inputDataArray.gitHub);

        // engineer.id = inputDataArray.id;
        // engineer.email = inputDataArray.email;
        // engineer.gitHub = inputDataArray.gitHub;

        teamArray.push(engineer);

        checkForMoreInput();
    });


    };
    
function  getInternInput () {
    inquirer
    .prompt([
        {
            type: "input",
            name:  "name",
            message:   "Please enter the Intern's name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name for your Intern!');
                    return false;
                }
            }
        },
        {
            type: "number",
            name: "id",
            message: "Please enter your Intern's employee ID.",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter a number for your Intern's employee ID!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter you Intern's e-mail address.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter a valid e-maill address for your Intern!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Please enter your Intern's school name.",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the school for your Intern!");
                    return false;
                }
            }

        }
    ])
    .then((inputDataArray) => {
        const intern = new Intern (inputDataArray.name, inputDataArray.id,inputDataArray.email, inputDataArray.school);

    //    intern.id = inputDataArray.id;
    //    intern.email = inputDataArray.email;
    //    intern.school = inputDataArray.school;

       teamArray.push(intern);

       checkForMoreInput();
    });

    };
function buildPage() {
    for (i=0; i < teamArray.length; i++) {
        if (teamArray[i].role === 'Manager'){
            const manager = new Manager (teamArray[i].name, teamArray[i].id, teamArray[i].email, teamArray[i].officeNumber);
            console.log(manager.role, manager.getName(), manager.getEmail(), manager.getId(), manager.getOfficeNumber());
        } else if (teamArray[i].role === 'Engineer'){
            const engineer = new Engineer (teamArray[i].name, teamArray[i].id, teamArray[i].email, teamArray[i].gitHUb);
            console.log(engineer.role, engineer.getName(), engineer.getEmail(), engineer.getId(), engineer.getGitHub());
        } else {
            const intern = new Intern (teamArray[i].name, teamArray[i].id, teamArray[i].email, teamArray[i].school);
            console.log(intern.role, intern.getName(), intern.getEmail(), intern.getId(), intern.getSchool());
        }
            
    }
    
    
};

function init() {
    getEmployeeInput()   
};

init();
