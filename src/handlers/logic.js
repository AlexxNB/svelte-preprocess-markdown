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
        return text;
    }

    return {before,after}
}