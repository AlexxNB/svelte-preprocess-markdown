import marked from 'marked'

export default function tags() {
    let savedTags = [];
    let id = 0;

    let marked_options = {};

    const tags_replacer = (text,tag,attrs,content) => {
        content = before(content);
        content = content.replace(/^\s+/gm,'');
        content = marked(content,marked_options);
        if(!content.trim().match(/[\r\n]/g)) content = content.replace(/<p>|<\/p>/g,'').trim();
        const opentag = `${tag} ${attrs}`;
        savedTags[id++] = `<${opentag.trim()}>${content}</${tag}>`;
        return '```svelte-md-tag-'+id+'```';
    }

    const tags_restorator = (text,id) => {
        return savedTags[id-1];
    }

    const before = (text,options) => {
        marked_options = options;
        const re = /<([\w-:]+)([^>]*)>([\S\s]+?)<\/\1>/gm
        if(text.match(re)) text = text.replace(re,tags_replacer);

        
        return text;
    }

    const after = (text,options) => {
        marked_options = options;
        const re = /<code>svelte\-md\-tag\-(\d+)<\/code>/g;
        while(text.match(re)){
            text = text.replace(re,tags_restorator);  
        }
        return text;
    }
    return {before,after}
}