export default function tags() {
    let savedTags = [];
    let id = 0;

    let marked = () => {};

    const tags_replacer = (text,space1,open,tag,content,space2,close) => {
        content = before(content,marked);
        content = content.replace(new RegExp(`^[\\t ]{0,${space2.length}}`, "gm"),'');
        content = marked(content);
        if(!content.trim().match(/[\r\n]/g)) content = content.replace(/<p>|<\/p>/g,'').trim();
        savedTags[id++] = `${open}${content}${close}`;
        return "\n##### svelte-md-tag-"+id+" #####\n";
    }

    const tags_restorator = (text,id) => {
        return savedTags[id-1];
    }

    const before = (text,processor) => {
        marked = processor;
        const re = /([\t ]*)(<([\w-:]+)[^>]*>)\n?(([\s]*)[\S\s]+?)(<\/\3>)/gm
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