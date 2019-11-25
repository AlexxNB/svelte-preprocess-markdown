const command = process.argv[2];

const {getSnaplist} = require('./helpers/snapshots');
const {createVisualTest} = require('./helpers/visual');
const {doTesting} = require('./helpers/testing');
const {newTest} = require('./helpers/new');
const {markdown} = require('./../dist');

function handleSource(source,params={}){
    return markdown(params.options).markup({content:source,filename:params.name+'.md'}).code;
}


const snaplist = getSnaplist(handleSource,(command === 'update'));

if(command === 'new'){
    newTest(snaplist.length+1)
    process.exit(0);
}

createVisualTest(snaplist);
doTesting(snaplist);

