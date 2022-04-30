const Employee = require('./Employee');

class Engineer extends Employee {

    constructor (name = "", id, email, gitHub = "") {

        // super needed to extend arguments from parent class
        super(name, id, email);

        this.name = name;
        // only github unique to engineer
        this.gitHub = gitHub;
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
