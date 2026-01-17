const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'projectName',
      message: 'Project name:',
      default: this.appname
    }]).then(answers => {
      this.answers = answers;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath(this.answers.projectName),
      this.answers
    );
  }

  install() {
    this.npmInstall();
  }
};
