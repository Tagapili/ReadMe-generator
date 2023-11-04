// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions  = [
//create prompts for each question
{
  type:"Input",
  name:"title",
  message:"Give a title for the project:",
  },
  // "Give project description:"
  {
  type:"input",
  name:"description",
  message:"Give project description:",
  //"Pick the appropriate license for this project"
  type:"chekbox",
  name:"license",
  message:"Select a license applicable to this project"
  },
  // "Give Instructions For Use:"
  {
  type:"input",
  name:"instructions",
  message:"Give Instructions For Use:"
  },
  // "Give Contribution Guidelines:",
  {
  type:"input",
  name:"guidelines",
  message:"Give Contribution Guidelines:",
  },
  // "Give test instructions:"
  {
  type:"input",
  name:"test",
  message:"Give test instructions:"
  },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// TODO: Create a function to initialize app
function init(){
  inquirer.prompt(questions).then((responses) => {
  console.log("Creating the README.md file...");
  writeToFile("./dist/README.md", generateMarkdown({...responses }));
});
}

// Function call to initialize app
init();
