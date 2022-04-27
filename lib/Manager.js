const Employee = require('./Employee');

class Manager extends Employee{

  

    constructor (name = "") {

        super(name);
        
        this.name = name;
        this.officeNumber = null;
        this.role = "Manager";
    }
    getOfficeNumber() {
       return this.officeNumber; 
    }
    getRole() {
        return this.role;
    }
}

module.exports = Manager;
