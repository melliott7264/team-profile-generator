const Employee = require('./Employee');

class Engineer extends Employee {

    constructor (name = "") {

        super(name);

        this.name = name;
        this.gitHub = "";
        this.role = "Engineer";
    }
    getGitHub() {
        return this.gitHub;

    }
    getRole() {
        return this.role;
    }
}

module.exports = Engineer;
