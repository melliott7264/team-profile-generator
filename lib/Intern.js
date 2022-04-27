const Employee = require('./Employee');

class Intern extends Employee {
    
    constructor(name = "") {

        super(name);

        this.name = name;
        this.school = "";
        this.role = "Intern";
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.role
    }
}

module.exports = Intern;
