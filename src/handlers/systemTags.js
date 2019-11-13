import {moduleStore} from './../store';

export default function systemTags() {
    let savedSystags = [];
    let id = 0;

    const systags_replacer = (text) => {
        savedSystags[id++] = text;
        return '%svelte-md-block-systag-'+id+'%';
    }

    const systags_restorator = (text,id) => {
        return savedSystags[id-1];
    }

    const mdsv_parser = (text) => {
        if(!text.match(/^[\t ]*<script[\S\s]*?>[\S\s]*?<\/script>/gmi)){
            
            const re = /^[\t ]*(import .+ from .+)[\t ]*$/gmi
            let res;
            while(res = re.exec(text)) {
                moduleStore.add(res[1]);
            }
            text = text.replace(re,'');
        }
        return text;
    }

    const before = (text,processor) => {
       
        text = mdsv_parser(text);
        const re = /^[\s]*<(?:script|style)[^>]*>[\S\s]*?<\/.+>[\s]*$/gmi
        text = text.replace(re,systags_replacer);
    
        return text;
    }

    const after = (text,processor) => {
        const re = /%svelte\-md\-block\-systag\-(\d+)%/g;
        text = text.replace(re,systags_restorator);
        return text;
    }
    return {before,after}
}