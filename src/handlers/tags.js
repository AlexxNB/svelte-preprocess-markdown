export default function tags() {
    let savedTags = [];
    let id = 0;

    let marked = () => {};

    const renderer_p = (text) => {
        if(text.match(/^([\s]*<code>svelte\-md\-tag\-\d+<\/code>|<br>)+[\s]*$/)){
            return text.replace(/<br>/g,"\n")+"\n";
        }else{
            return `<p>${text}</p>\n`;
        }
    }

    const singletags_replacer = (text,spaces,tag) => {
        savedTags[id++] = tag;
        return spaces+" ``` svelte-md-tag-"+id+" ``` ";
    }

    const tags_replacer = (text,space1,open,tag,content,space2,close) => {
         if(content.length > 0){
            content = before(content,marked);
            content = content.replace(new RegExp(`^[\\t ]{0,${space2.length}}`, "gm"),'');
            content = marked(content);
            if(!content.trim().match(/[\r\n]/g)) content = content.replace(/<p>|<\/p>/g,'').trim();
        }
        
        savedTags[id++] = `${open}${content}${close}`;
        return space1+" ``` svelte-md-tag-"+id+" ``` ";
    }

    const tags_restorator = (text,id) => {
        return savedTags[id-1];
    }

    const before = (text,processor) => {
        marked = processor;
        const renderer = new marked.Renderer();
        renderer.paragraph = renderer_p;
        marked.setOptions({renderer});

        const single_re = /([\t ]*)(<\w+[^>]*\/>)/g;
        text = text.replace(single_re,singletags_replacer);
        
        const re = /([\t ]*)(<([\w-:]+)[^>]*>)\n?(([\s]*)[^<]*?)(<\/\3>)/gm
        while(text.match(re)) {
            text = text.replace(re,tags_replacer);
        }

        text = text.replace(/^[\\t ]+(``` svelte\-md\-tag\-\d+ ```)/gm,'$1');

        return text;
    }

    const after = (text,processor) => {
        const re = /(?:```|[ ]?<code>)svelte\-md\-tag\-(\d+)(?: ```|<\/code>[ ]?)/g;
        while(text.match(re)){
            text = text.replace(re,tags_restorator);  
        }
        return text;
    }


    return {before,after}
}