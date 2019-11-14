const fs = require('fs');
const path = require('path');
const {markdown} = require('./../dist');

const mode = {
    testnum: false,
    generate: false,
    dir: path.join(__dirname,'tests')
}

process.argv.forEach(param => {
    const num = param.match(/^(\d+)$/g);
    if(!!num) mode.testnum = +num[0];

    if(param === 'generate') mode.generate = true;
})


function runTest(number) {
    const dir = path.join(mode.dir,`test-${number}`);
    const test = {
        dir: dir,
        source: path.join(dir,'source.md'),
        expect: path.join(dir,'expect.svelte'),
        options: path.join(dir,'options.js'),
    }

    if(!fs.existsSync(test.dir)){
        if(mode.generate) {
            fs.mkdirSync(test.dir);
            fs.writeFileSync(test.source,`<!-- Test #${number} -->`);
            fs.writeFileSync(test.expect,`<!-- Test #${number} -->`);
            fs.writeFileSync(test.options,'exports.options = {};');
        }
        else
            return false
    }
    
    const test_content = fs.readFileSync(test.source,{encoding: 'utf-8'});
    const processed_content = markdown(require(test.options).options).markup({content:test_content,filename:'Helloworld.md'});
    
    if(mode.generate) {
        fs.writeFileSync(test.expect,processed_content.code);
    } else {
        const expected_content = fs.readFileSync(test.expect,{encoding: 'utf-8'});
        if(processed_content.code === expected_content)
            return true;
        else
            return false;
    }
}

if(mode.generate) {
    if(mode.testnum) {
        console.log('### Generating test #'+mode.testnum);
        runTest(mode.testnum);
        process.exit(0);
    } else {
        console.log('[!] Impossible to regenerate all tests!');
        process.exit(1);
    }
} else {
    const testlist = fs.readdirSync(mode.dir);

    let passed = true;
    for(let i = 0; i < testlist.length; i++){
        if(mode.testnum && mode.testnum !== i+1) continue;
        console.log(`### Run test #${(i+1)}`);  
        if(runTest((i+1))) {
            console.log(` - test #${(i+1)} PASSED`); 
        } else {
            console.log(` - test #${(i+1)} FAILED!`); 
            passed = false;
        }
    }
    process.exit(passed ? 0 : 1);
}