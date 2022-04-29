const Employee = require('./Employee');

class Manager extends Employee{

    constructor (name = "", id, email, officeNumber = null) {

        super(name, id, email);
        
        this.name = name;
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
