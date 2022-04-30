const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const {readFile, writeFile, copyFile} = require('./lib/files');

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
            type: "input",
            name: "id",
            message: "Please enter your Manager's employee ID.",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter a number for your Manager's employee ID!");
                    return false      
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
            type: "input",
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
            type: "input",
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
            type: "input",
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

       teamArray.push(intern);

       checkForMoreInput();
    });

    };
function buildPage() {
    var cardsArray = [];
    var managerCard= "";
    var engineerCard= "";
    var internCard= "";
    var headerHtml = "";
    var footerHtml = "";
    var indexHtml = "";

    for (i=0; i < teamArray.length; i++) {
        if (teamArray[i].role === 'Manager'){
            const manager = new Manager (teamArray[i].name, teamArray[i].id, teamArray[i].email, teamArray[i].officeNumber);
            managerCard = `
            <div class="card col-12 col-md-6 col-xl-4 mt-4">
                <div class="card-body">
                    <div class="card-header bg-primary">
                        <h2 class="employee-title text-white">Manager</h4>
                        <h3 class="employee-name text-white">${manager.getName()}</h5>
                    </div>
                    <div class="body-container p-4 bg-secondary">
                        <p class="employee-data employee-id bg-white p-1">ID: <span>${manager.getId()}</span></p>
                        <p class="employee-data employee-email bg-white p-1">E-mail:  <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                        <p class="employee-data emplyee-info bg-white p-1" >Office:  ${manager.getOfficeNumber()}</p>
                    </div>
                </div>
            </div>   
                `;
            cardsArray.push(managerCard);
        } else if (teamArray[i].role === 'Engineer'){
            const engineer = new Engineer (teamArray[i].name, teamArray[i].id, teamArray[i].email, teamArray[i].gitHub);
            engineerCard =  `
            <div class="card col-12 col-md-6 col-xl-4 mt-4">
                <div class="card-body">
                    <div class="card-header bg-primary">
                        <h2 class="employee-title text-white">Engineer</h4>
                        <h3 class="employee-name text-white">${engineer.getName()}</h5>
                    </div>
                    <div class="body-container p-4 bg-secondary">
                        <p class="employee-data employee-id bg-white p-1">ID: <span>${engineer.getId()}</span></p>
                        <p class="employee-data employee-email bg-white p-1">E-mail:  <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                        <p class="employee-data emplyee-info bg-white p-1" >GitHub:  <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></p>
                    </div>
                </div>
            </div>   
                `;
            cardsArray.push(engineerCard);
        } else {
            const intern = new Intern (teamArray[i].name, teamArray[i].id, teamArray[i].email, teamArray[i].school);
            internCard =  `
            <div class="card col-12 col-md-6 col-xl-4 mt-4">
                <div class="card-body">
                    <div class="card-header bg-primary">
                        <h2 class="employee-title text-white">Intern</h4>
                        <h3 class="employee-name text-white">${intern.getName()}</h5>
                    </div>
                    <div class="body-container p-4 bg-secondary">
                        <p class="employee-data employee-id bg-white p-1">ID: <span>${intern.getId()}</span></p>
                        <p class="employee-data employee-email bg-white p-1">E-mail:  <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                        <p class="employee-data emplyee-info bg-white p-1" >School:  ${intern.getSchool()}</a></p>
                    </div>
                </div>
            </div>   
                `;
            cardsArray.push(internCard);
        }   
    }
    readFile('./src/header.html')
    .then(readFileData => {
        headerHtml = readFileData;
        return readFile('./src/footer.html');
    })
    .then(readFileData => {
        footerHtml = readFileData;
        indexHtml = headerHtml.concat("",cardsArray.join("").toString()).concat("",footerHtml);
        return writeFile(indexHtml);
    })
    .then (writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then (copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
    
};


function init() {
    getEmployeeInput()   
};

init();
