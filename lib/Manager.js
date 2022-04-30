const Employee = require('./Employee');

class Manager extends Employee{

    constructor (name = "", id, email, officeNumber = null) {

        // super needed to extend arguments from parent class
        super(name, id, email);
        
        this.name = name;
        // only office number unique to Manager
        this.officeNumber = officeNumber;
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
