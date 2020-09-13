const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./htmltemplates/template");

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamstr = ``;

async function start() {
     try {
          await prompt()
          for (let i = 0; i < teamArray.length; i++) {
               teamstr = teamstr + html.generateDetails(teamArray[i]);
          }
          let finalHTML = html.generateHTML(teamstr)
          console.log(teamstr)
          writeFileAsync("./output/index.html", finalHTML)
     } catch (err) {
          return console.log(err);
     }
};
async function prompt() {
     let responseDone = "";
     do {
          try {
               response = await inquirer.prompt([
                    {
                         type: "input",
                         name: "name",
                         message: "Employee name: "
                    },
                    {
                         type: "input",
                         name: "id",
                         message: "Employee Id: "
                    },
                    {
                         type: "input",
                         name: "email",
                         message: "Employee email: "
                    },
                    {
                         type: "list",
                         name: "role",
                         message: "Employee role:",
                         choices: [
                              "Manager",
                              "Engineer",
                              "Intern"

                         ]
                    }
               ]);

               let response2 = ""
               if (response.role === "Engineer") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "x",
                         message: "Employee github username?:",
                    },]);
                    const engineer = new Engineer(response.name, response.id, response.email, response2.x);
                    teamArray.push(engineer);
               } else if (response.role === "Intern") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "x",
                         message: "Employee school:",
                    },]);
                    const intern = new Intern(response.name, response.id, response.email, response2.x);
                    teamArray.push(intern);
               } else if (response.role === "Manager") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "x",
                         message: "Employee office number:",
                    },]);
                    const manager = new Manager(response.name, response.id, response.email, response2.x);
                    teamArray.push(manager);
               }
          } catch (err) {
               return console.log(err);
          }
          console.log(teamArray)

          responseDone = await inquirer.prompt([{
               type: "list",
               name: "finish",
               message: "Would you like to continue: ",
               choices: [
                    "Yes",
                    "No"
               ]
          },]);

     } while (responseDone.finish === "Yes");
}


start();
