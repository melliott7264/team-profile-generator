# Team Profile Generator

## Description

This application generates a simple web page (index.html) to displays the members of a team of employees with all their contact information.  This page is to help the manager manage his or her team and to facilitate communication and cooperation among the team.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

This is a node.js application.  So you need to have node.js installed on your systems   You can install node.js from the [NodeJS Website](https://nodejs.org/en/).  Follow the instruction for the installer for your system.

This application may be downloaded from this GitHub repository: https://github.com/melliott7264/team-profile-generator.   Copy the contents of the repository to your system.   In the folder where you installed index.js and the .json files, run "npm install".  It should install inquirer for you creating the node_modules folder with all the dependencies.   At this point everything should be installed to execute the application.

## Usage

After all the prerequisites have been installed above, type "node index" on the command line to run the program.  Make sure you are in the directory where the index.js file is located.  Follow all the prompts to provide all the information requested.  When presented with a choice of Manager, Engineer, or Intern roles, you will have to use the cursor keys to select the role you want and then press the Enter key to accept it.  Once all the information has been entered for a role, you will be asked if you want to enter the information for another team member.  Respond with a Y or an N.   The default is an N.  At the end,  an index.html file will be created in the ./dist folder and a style.css file will be copied in.

A video demonstration of the application is given below.   Click on the link to view on YouTube.

https://youtu.be/gW0P2Ggyeg0


## Credits

Mark Elliott  https://github.com/melliott7264


## License

Copyright (c) 2022 Mark Elliott

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## Tests

Jest is used to test the script files that create the classes that describe Employee, Manager, Engineer, and Intern.   These test files are in the __tests__ folder.   Assuming Jest is installed on your system, you can run the tests by typing "npm run test" and pressing the Enter key.   If the Employee.js, Manager.js, Engineer.js, and Intern.js files are working correctly, all the tests will be passed.   You know that the index.js file is working correctly when you get a functioning web page with all the information presented that you entered at the command line.  To test the generated index.html file, open it in VS Code and press alt-b (option-b on Mac) to display it in your default browser.   