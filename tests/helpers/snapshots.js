var path = require('path');
var fs = require('fs-extra');

const TESTS_DIR = path.resolve('tests');
const SNAPSHOTS_DIR = path.join(TESTS_DIR,'snapshots');
const TEST_EXT = '.md';
const SNAPSHOT_EXT = '.svelte';

module.exports.getSnaplist = function(handler,update=false){
    
    if(update) fs.emptyDirSync(SNAPSHOTS_DIR);

    const files = fs.readdirSync(TESTS_DIR).filter(f => f.endsWith(TEST_EXT));

    let snaplist = [];
    for(let i=0; i < files.length; i++){
        const name = path.basename(files[i],TEST_EXT);
        const source = fs.readFileSync(path.join(TESTS_DIR,files[i]),'utf-8');
        const result = handler(source,{name,options:getOptions(name)});
        const snapshot = getSnapshot(name,result);

        snaplist.push({name,source,result,snapshot});
    }
    
    return snaplist;
}

function getOptions (name){
    const options_file = path.join(TESTS_DIR,name+'.js');

    if(fs.existsSync(options_file))
        return require(options_file);
    else
        return {};
    
}

function getSnapshot (name,initial){
    const snapshot_file = path.join(SNAPSHOTS_DIR,name+SNAPSHOT_EXT);

    if(fs.existsSync(snapshot_file))
        return fs.readFileSync(snapshot_file,'utf-8');
    else
        return updateSnapshot(name,initial);  
}

function updateSnapshot (name,data){
    
    const snapshot_file = path.join(SNAPSHOTS_DIR,name+SNAPSHOT_EXT);
    fs.ensureFileSync(snapshot_file);
    fs.writeFileSync(snapshot_file,data);
    return data;
}