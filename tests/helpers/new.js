var path = require('path');
var fs = require('fs-extra');

const TESTS_DIR = path.resolve('tests');
const TEST_EXT = '.md';

module.exports.newTest = function(id){
    const new_file = path.join(TESTS_DIR,`${id}-new-test${TEST_EXT}`);
    fs.ensureFileSync(new_file);
    console.log('New test at:',new_file);
}
