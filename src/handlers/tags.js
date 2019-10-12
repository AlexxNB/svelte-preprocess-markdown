export default function tags() {
    let savedTags = [];
    let id = 0;

    let marked = () => console.log('oooops');

    const tags_replacer = (text,tag,attrs,content) => {
        content = before(content,marked);
        content = content.replace(/^\s+/gm,'');
        content = marked(content);
        if(!content.trim().match(/[\r\n]/g)) content = content.replace(/<p>|<\/p>/g,'').trim();
        const opentag = `${tag} ${attrs}`;
        savedTags[id++] = `<${opentag.trim()}>${content}</${tag}>`;
        return "\n##### svelte-md-tag-"+id+" #####\n";
    }

    const tags_restorator = (text,id) => {
        return savedTags[id-1];
    }

    const before = (text,processor) => {
        marked = processor;
        const re = /<([\w-:]+)([^>]*)>([\S\s]+?)<\/\1>/gm
        if(text.match(re)) text = text.replace(re,tags_replacer);

        
        return text;
    }

    const after = (text,processor) => {
        const re = /<h5.*?>svelte\-md\-tag\-(\d+)<\/h5>/g;
        while(text.match(re)){
            text = text.replace(re,tags_restorator);  
        }
        return text;
    }
    return {before,after}
}