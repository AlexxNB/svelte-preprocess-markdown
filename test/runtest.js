const fs = require('fs');
const {markdown} = require('./../dist');

const markup = fs.readFileSync('./test/example.md',{encoding: 'utf-8'});
const expected = fs.readFileSync('./test/expected.svelte',{encoding: 'utf-8'});


const processed = markdown().markup({content:markup,filename:'Helloworld.md'});

if(processed.code === expected) {
    console.log('Test PASSED');
    process.exit(0);
}else{
    console.log('Test FAILED!');
    process.exit(1);
}

//fs.writeFileSync('./test/expected.svelte',processed.code);