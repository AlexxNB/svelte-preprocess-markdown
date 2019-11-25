var path = require('path');
var fs = require('fs-extra');

const TESTS_DIR = path.resolve('tests');
const VISUAL_DIR = path.join(TESTS_DIR,'visual');
const VISUAL_EXT = '.svelte';

module.exports.createVisualTest = function(snaplist){
    console.log('Open visual test at:');
    for(let i=0; i < snaplist.length; i++){
        const snapshot = snaplist[i];
        const visual_file = path.join(VISUAL_DIR,snapshot.name+VISUAL_EXT);
        fs.ensureFileSync(visual_file);
        fs.writeFileSync(visual_file,snapshot.result);
        console.log(`${i+1}.`,visual_file);
    }    
}
