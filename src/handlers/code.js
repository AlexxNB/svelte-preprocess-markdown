export default function code() {

    let savedCode = [];
    let id = 0;

    let marked = () => {};

    const code_sanitizer = (text) => {
        text = text.replace(/{/g,'&#123;').replace(/}/g,'&#125;');
        return text;
    }

    const code_replacer = (code,spaces) => {
        code = code.replace(new RegExp(`^[\\t ]{0,${spaces}}`, "gm"),'');
        code = code_sanitizer(marked(code));
        savedCode[id++] = code;
        return "\n##### svelte-md-code-"+id+" #####\n";
    }

    const code_restorator = (text,id) => {
        return savedCode[id-1];
    }

    const before = (text,processor) => {
        marked = processor;

        const re = /^([\t ]*)(```[\w ]*)[\t ]*$/mg
        let result;
        let level = 0;
        let map = [];
        const mapitem = {start:0,end:0,spaces:0};
        while(result = re.exec(text)){
            if(result[2].length > 3) {
                level++;
                if(level === 1) {
                    mapitem.start = result['index']
                    mapitem.spaces = result[1].length
                }
            }else if(result[2].length === 3) {
                level--;
                if(level === 0) {
                    mapitem.end = (result['index']+result[1].length+3)
                    map.push({...mapitem});
                    mapitem.start = mapitem.spaces = mapitem.end = 0;
                }
                
            }
        }

        let masked_text = text;
        for(let i = 0; i < map.length; i++){
            const codeblock = text.slice(map[i].start,map[i].end);
            masked_text = masked_text.replace(codeblock,()=>code_replacer(codeblock,map[i].spaces));
        }

        return masked_text;
    }

    const after = (text,processor) => {
        const re = /<h5.*?>svelte\-md\-code\-(\d+)<\/h5>/g;
        text = text.replace(re,code_restorator);
        return text;
    }
    return {before,after}
}