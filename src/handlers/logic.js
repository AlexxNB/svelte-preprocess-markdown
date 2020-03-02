export default function logic() {
    let savedLogic = [];
    let id = 0;

    let marked = () => {};

    const logic_replacer = (text,space1,open,tag,content,space2,close) => {
         if(content.length > 0){
            content = before(content,marked);
            content = content.replace(new RegExp(`^[\\t ]{0,${space2.length}}`, "gm"),'');

            const subcontents = content.split(/\{:.+\}/);

            for(let i=0; i<subcontents.length; i++){
                let text = subcontents[i];
                const multiline = (/[\r\n]/.test(text));
                
                text = marked(text);

                if(multiline) 
                    text = "\n"+text;
                else
                    text = text.replace(/<p>|<\/p>/g,'').trim();

                content = content.replace(subcontents[i],text);
            }      
        }
        
        savedLogic[id++] = `${open}${content}${close}`;
        return space1+"%svelte-md-block-logic-"+id+"%";;
    }

    const logic_restorator = (text,id) => {
        return savedLogic[id-1];
    }

    const each_list_butify = (text,open,type,attr,content,close) => {
        return `<${type}${attr}>\n${open}\n${content}${close}\n</${type}>`;
    }

    
    const table_butify = (text,head,body) => {
        const columns = getCols(head);

        body = body.replace(/{:else}\s+?<p>(.+)<\/p>\s+?{\/each}/mgi,(_,string) => `{:else}\n${makeSpanedRow(string,columns)}\n{\/each}`);
        body = body.replace(/^(?:<p>)?(\|.+\|)(?:<\/p>)?$/mgi,(_,content)=>makeHTMLRows(content,columns));

return `<table>
<thead><tr>${head}</tr></thead>
<tbody>
${body}
</tbody>
</table>`;
    }

    const before = (text,processor) => {
        marked = processor;
        
        const re = /([ \t]*)(\{#([a-z]+)[^}]*})(\n?([\s]*)[\S\s]*?)(\{\/\3\})/gmi
        while(text.match(re)) {
            text = text.replace(re,logic_replacer);
        }

        text = text.replace(/^[\\t ]+(%svelte\-md\-block\-logic\-\d+%)/gm,'$1');

        return text;
    }

    const after = (text,processor) => {
        const re = /%svelte\-md\-block\-logic\-(\d+)%/g;
        while(text.match(re)){
            text = text.replace(re,logic_restorator);  
        }

        // Make list in each
        text = text.replace(/({#each.*?})\s*<([uo]l)(.*?)>\s*([\s\S]*)<\/\2>\s*({\/each})/gmi,each_list_butify);

        // Make table in each
        text = text.replace(/<table>\s*<thead>\s*<tr>((?:(?!<\/tr>)[\s\S])+)<\/tr>\s*<\/thead>\s*<tbody>\s*<tr>\s*<td(?: align=".+")*>((?:(?!<\/table>)[\s\S])*(?:<p>\|[\s\S]+?\|<\/p>)[\s\S]*?)<\/td>[\s\S]+?<\/tr>\s*<\/tbody>\s*<\/table>/gmi,table_butify); 
        return text;
    }

    return {before,after}
}

// Table helpers

function makeHTMLRows(str,cols){
  return str.split('\n').map(line => {
    let cells = line.split('|');

    if(cells.length - cols.length !== 2) return line;
    if(cells[0] !== '' || cells[cells.length-1] !== '') return line;

    cells = cells.slice(1,-1).map((content,index) => `<td${cols[index] === 'left' ? '' : ` align="${cols[index]}"`}>${content}</td>`)
    
    return `<tr>${cells.join('')}</tr>`
  }).join('\n');
}

function makeSpanedRow(str,cols){
    return `<tr><td${cols.length > 1 ? ` colspan="${cols.length}"` : ''}>${str}</td></tr>`
}
  
function getCols(str){
    let cols = [];
  
    let regexp = /<th(?: align="(.+?)")*>.+?<\/th>/gim;
    let result;
    while (result = regexp.exec(str)) {
      cols.push(result[1] || 'left');
    }
  
    return cols;
  }