import codehider from './_codehider';

export default function systemTags() {
    let savedSystags = [];
    let savedCode = [];
    let id = 0;
    let code_id = 0;

    const systags_replacer = (text) => {
        savedSystags[id++] = text;
        return '##### svelte-md-systag-'+id+' #####';
    }

    const systags_restorator = (text,id) => {
        return savedSystags[id-1];
    }

    const code_replacer = (text) => {
        savedCode[code_id++] = text;
        return '##### svelte-md-code-'+code_id+' #####';
    }

    const code_restorator = (text,id) => {
        return savedCode[id-1];
    }

    const mdsv_parser = (text) => {
        if(!text.match(/<script[\S\s]*?>[\S\s]*?<\/script>/gmi)){
            
            const re = /^[\s]*(import .+ from .+)[\s]*$/gmi
            const imports = [];
            let res;
            while(res = re.exec(text)) imports.push(res[1]);

            if(imports.length > 0) {
                text = text.replace(re,'');
                text = `<script>\n  ${imports.join("\n  ")}\n</script>\n${text}`;
            }

        }
        return text;
    }

    const before = (text,processor) => {
        const ch = codehider('(import|script)');
        text = ch.hide(text);
        text = mdsv_parser(text);
        const re = /^[\s]*<(?:script|style)[^>]*>[\S\s]*?<\/.+>[\s]*$/gmi
        text = text.replace(re,systags_replacer);
        text = ch.unhide(text);
        return text;
    }

    const after = (text,processor) => {
        const re = /(?:##### |<h5.*?>)svelte\-md\-systag\-(\d+)(?: #####|<\/h5>)/g;
        text = text.replace(re,systags_restorator);
        return text;
    }
    return {before,after}
}