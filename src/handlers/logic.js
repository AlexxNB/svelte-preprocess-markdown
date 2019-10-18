export default function logic() {
    let savedLogic = [];
    let id = 0;

    let marked;

    const logic_replacer = (text,open,type,content,close) => {
        const re_else = /{:.+?}/gm

        content = before(content,marked);
        content = content.replace(/^\s+/gm,'');
        
        if(content.match(re_else)) content = content.replace(/{:.+?}/gm,logic_else_replacer);

        content = marked(content);
        //if(!content.trim().match(/[\r\n]/g)) content = content.replace(/<p>|<\/p>/g,'').trim();
        
        savedLogic[id++] = `${open}${content}${close}`;
        return "\n%svelte-md-block-logic-"+id+"%\n";
    }

    const logic_else_replacer = (text) => {
        savedLogic[id++] = text;
        return "\n%svelte-md-block-logic-"+id+"%\n";
    }

    const logic_restorator = (text,id) => {
        return savedLogic[id-1];
    }

    const before = (text,processor) => {
        marked = processor;
        const re = /({\#(\w+).+})([\s\S]+?)({\/\2})/gm
        if(text.match(re)) text = text.replace(re,logic_replacer);
        

        
        return text;
    }

    const after = (text,processor) => {
        const re = /%svelte\-md\-block\-logic\-(\d+)%/g;
        while(text.match(re)){
            text = text.replace(re,logic_restorator);  
        }
        return text;
    }
    return {before,after}
}