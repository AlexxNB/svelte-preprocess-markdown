const fs = require('fs');
const {markdown} = require('./../dist');

//const mode = 'testing';
const mode = 'produce';

const testnum = 4;

for(let i = 1; i <= testnum; i++) {
    const testfile = `./test/tests/test-${i}.md`;
    const expectedfile = `./test/tests/test-${i}-expected.svelte`;
    const markup = fs.readFileSync(testfile,{encoding: 'utf-8'});
    const processed = markdown().markup({content:markup,filename:'Helloworld.md'});

    if(mode === 'testing'){
        const expected = fs.readFileSync(expectedfile,{encoding: 'utf-8'});
        if(processed.code === expected) {
            console.log('Test PASSED');
        }else{
            console.log('Test FAILED!');
            process.exit(1);
        }
    }else{
        fs.writeFileSync(expectedfile,processed.code);
    }
    
}