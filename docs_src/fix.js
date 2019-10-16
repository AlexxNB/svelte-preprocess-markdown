const fs = require('fs');
const path = require('path');

const dir = path.resolve('./__sapper__/export/svelte-preprocess-markdown');


console.log('Renaming all dashed files');


function rename_files(dir) {

    let renamed = [];

    fs.readdirSync(path.join(dir,'client')).forEach(filename => {
        if(filename.startsWith('_')){
            let file = {
                from: filename,
                to: filename.replace(/^_/,'')
            }

            renamed.push(file);

            console.log(file.from+' -> '+file.to);
            fs.renameSync( path.join(dir,'client',file.from), path.join(dir,'client',file.to) );
        }
    });

    return renamed;
}

function replace_filename(dir,renames) {
    fs.readdirSync(path.join(dir)).forEach(file => {
        const filepath = path.join(dir,file);
        const stat = fs.lstatSync(filepath);
        if(stat.isDirectory()) {
            replace_filename(filepath,renames);
        }else{
            let source = fs.readFileSync(filepath,{encoding:'utf-8'});
            let changed = false;
            renames.forEach(rpl => {
                if(source.includes(rpl.from)){
                    changed = true;
                    console.log(filepath);
                    source = source.replace(new RegExp(rpl.from, 'g'),rpl.to);
                }
            });
            if(changed) fs.writeFileSync(filepath,source);
            
        }
        
    })
}

replace_filename(dir,rename_files(dir));
