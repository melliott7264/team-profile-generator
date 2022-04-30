// load inquirer for question prompts 
const inquirer = require('inquirer');

// attach script files for employee child classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// attach script file for file system functions
const {readFile, writeFile, copyFile} = require('./lib/files');

// this array holds the html strings for the employee cards 
const teamArray = [];

// this function determines the type of employee for which you are entering data; Manager, Engineer, or Intern
function  getEmployeeInput() {
    console.log("Please answer the following questions about each of your team members:")
    
    // prompt for the employee type
    inquirer
    .prompt(
        {
            type:   "list",
            name:   "role",
            message: "Please select the employee's role:  ",
            choices: ["Manager", "Engineer", "Intern"]
            }
    )
    // then direct program execution to the appropriate function for each employee type/role
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

// this function checks to see if the user wants to add another employee to the team
function checkForMoreInput() {
    inquirer
    // a confirmation (Y/N) prompt as to whether to enter another employee
    .prompt({
        type: "confirm",
        name: "moreEmployees",
        message: "Do you have any more team members to enter?",
        default:  false
    })
    // if Yes, then start the data entry process all over again at getEmployeeInput,  else goto the function to build the html page.
    .then(({moreEmployees}) => {
        if (moreEmployees) {
            getEmployeeInput();
        } else {
            buildPage();
        }
    });
};

// this function gets the input for the Manager role
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
            // should have used type:number here but I ran into validation problems.   It seems to be a bug in inquirer.
            type: "input",
            name: "id",
            message: "Please enter your Manager's employee ID.",
            // even using type:input all attempts to check for NaN results in "NaN" being displayed at the input prompt and it cannot be deleted.
            // hence, a very limited validation function.
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
            // see comment above about use of type:number
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
    // getting data array from prompts and passing the data to the Manager class for an object creation, then push the object onto the team array.
    .then((inputDataArray) => {
        const manager = new Manager (inputDataArray.name, inputDataArray.id, inputDataArray.email, inputDataArray.office);

        teamArray.push(manager);

        // check to see if another employee is to be entered
        checkForMoreInput();
    });
    };

// function to get input for the engineer role.
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
            // see note in getManagerInput about type:number and why type:input was used here.
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
    // getting data array from prompts and passing the data to the Engineer class for an object creation, then push the object onto the team array.
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
            // see note in getManagerInput about type:number and why type:input was used here.
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
    // getting data array from prompts and passing the data to the Intern class for an object creation, then push the object onto the team array.
    .then((inputDataArray) => {
        const intern = new Intern (inputDataArray.name, inputDataArray.id,inputDataArray.email, inputDataArray.school);

       teamArray.push(intern);

       checkForMoreInput();
    });

    };

// the function to build the html page from strings loaded from template files and strings of template literals.
function buildPage() {
    // holds the strings for each employee card
    var cardsArray = [];

    // variables to temporarily hold the strings from template literals for each card
    var managerCard= "";
    var engineerCard= "";
    var internCard= "";

    // variables to hold the beginning and ending strings of the index.html file loaded from template files
    var headerHtml = "";
    var footerHtml = "";

    // the string variable containing the entire index.html page.
    var indexHtml = "";


    //  this for loop loads ups the cardsArray with strings for each employee card type.
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
    // this reads in the beginning text for the index.html file
    readFile('./src/header.html')
    .then(readFileData => {
        headerHtml = readFileData;
        // this reads in the ending text for the index.html file
        return readFile('./src/footer.html');
    })
    .then(readFileData => {
        footerHtml = readFileData;
        // assembling the header(includes a bit of <main>), footer(includes a bit of <main>), and employee card strings into one web page.
        // it was important to use a join and toString method here.  I tried JSON.stringify and if produced unwanted escape chars in the resulting string
        indexHtml = headerHtml.concat("",cardsArray.join("").toString()).concat("",footerHtml);
        // creates a dist folder if it doesn't exist and writes the index.html file in it
        return writeFile(indexHtml);
    })
    // processing any messages from the file write
    .then (writeFileResponse => {
        console.log(writeFileResponse);
        // copying the style.css file to the dist folder
        return copyFile();
    })
    // processing any messages from the file copy
    .then (copyFileResponse => {
        console.log(copyFileResponse);
    })
    // processes any error messages from the writes or copy
    .catch(err => {
        console.log(err);
    });
    
};

// starts the ball rolling by calling getEmployeeInput for the first time
function init() {
    getEmployeeInput()   
};

// calls the first function
init();
