const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  initializing() {
    this.log('Available templates:');
    this.log('  - ruby: Ruby project with Docker');
    this.log('  - node: Node.js project with Docker');
    this.log('');
    this.log('Usage: yo vovanmozg:ruby  or  yo vovanmozg:node');
  }
};
