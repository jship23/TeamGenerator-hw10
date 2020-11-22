// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee(){
    constructor(name, email, id, githubID, role){
        super (name, email, id)
        this.githubID = github;
        this.role = "Engineer";
    }

    getGitHubID(){
        return this.githubID
    }

    getRole(){
        return this.role;
    }
};

module.exports = Engineer;