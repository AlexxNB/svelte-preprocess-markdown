import {moduleStore} from './../store';

export default function code() {

    let savedCode = [];
    let id = 0;

    let marked = () => {};

    const code_sanitizer = (text,inline=false) => {
        text = text.replace(/{/g,'&#123;').replace(/}/g,'&#125;');
        if(inline) text = text.replace(/</g,'&lt;').replace(/>/g,'&gt;');
        return text;
    }

    const inline_code_replacer = (text,code) => {
        savedCode[id++] = code_sanitizer(code,true);
        return "```%svelte-md-inline-code-"+id+"%```";
    }

    const code_replacer = (code,spaces) => {
        code = code.replace(new RegExp(`^[\\t ]{0,${spaces}}`, "gm"),'');
        code = code_sanitizer(marked(code));
        savedCode[id++] = code;
        return "%svelte-md-block-code-"+id+"%";
    }

    const code_restorator_inline = (text,id) => {
        return savedCode[id-1];
    }

    const code_restorator_block = (text,id) => {
        moduleStore.add('const CODEBLOCK_'+id+' = `'+savedCode[id-1].replace(/`/g,'\\`')+'`;');
        return `{@html CODEBLOCK_${id}}`;
    }

    const before = (text,processor) => {
        marked = processor;

        const inline_re = /```(.+?)```/g;
        text = text.replace(inline_re,inline_code_replacer);

        const re = /^([\t ]*)(```.*)[\t ]*$/mg
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
        const re_inline = /%svelte\-md\-inline\-code\-(\d+)%/g;
        const re_block = /%svelte\-md\-block\-code\-(\d+)%/g;
        text = text.replace(re_inline,code_restorator_inline);
        text = text.replace(re_block,code_restorator_block);
        return text;
    }
    return {before,after}
}