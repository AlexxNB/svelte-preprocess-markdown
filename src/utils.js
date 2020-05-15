import marked from 'marked'

export const getMarkedInstance = (options) =>{
    const defaults = marked.getDefaults();
    defaults.renderer = getMarkedRenderer();
    options = Object.assign(defaults,{headerIds:false},options);
    
    marked.setOptions(options);

    set_p_renderer(marked);
    set_checkbox_renderer(marked,options);

    return marked;
} 


function set_p_renderer (marked_instance) { 
    const defParagraph = marked_instance.defaults.renderer.paragraph.bind({});
    
    marked_instance.defaults.renderer.paragraph = (text) => {
        if(text.match(/^([\s]*%svelte\-md\-block\-\w+\-\d+%)+[\s]*$/)){
            return text.replace(/<br>/g,"\n")+"\n";
        }else{
            return defParagraph(text);
        }
    }
}

function set_checkbox_renderer (marked_instance,options) { 
    marked_instance.defaults.renderer.checkbox = (checked) => {
        return '<input ' + (checked ? 'checked="checked" ' : '') + 'disabled="disabled" type="checkbox"' + (options.xhtml ? ' /' : '') + '> ';
    }
}

export const getMarkedRenderer = () => {
    return new marked.Renderer();
}