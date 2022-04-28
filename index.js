const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


function  getEmployeeInput() {
        console.log("Please answer the following questions about each of your team members:")
        
        return inquirer
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
            const manager = new Manager (inputDataArray.name);
    
            manager.id = inputDataArray.id;
            manager.email = inputDataArray.email;
            manager.officeNumber = inputDataArray.office;
    
            console.log(manager);
        });
    };
  function  getEngineerInput() {

    };
  function  getInternInput () {

    };

function init() {
    getEmployeeInput()
   
 
    
};

init();
