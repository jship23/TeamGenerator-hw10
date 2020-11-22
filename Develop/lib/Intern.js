// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee(){
    constructor(name, email, id, school, role){
        super (name, email, id)
        this.githubID = github;
        this.role = "Engineer";
    }

    getSchool(){
        return this.school
    }

    getRole(){
        return this.role;
    }
};

module.exports = Intern;