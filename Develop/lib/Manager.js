// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends new Employee(){
    constructor(name, email, id, officeNumber){
        super (name, email, id)
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber
    }

    getRole(){
        return this.role;
    }
};

module.exports = Manager;