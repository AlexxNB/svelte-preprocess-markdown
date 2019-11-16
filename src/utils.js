import marked from 'marked'

export const getMarkedInstance = (options) =>{
    options = {headerIds:false,...options};
    marked.setOptions(marked.getDefaults());
    marked.setOptions(options);
    

    const set_p_renderer = (marked_instance) => { 
        const defParagraph = marked_instance.defaults.renderer.paragraph.bind({});
        
        marked_instance.defaults.renderer.paragraph = (text) => {
            if(text.match(/^([\s]*%svelte\-md\-block\-\w+\-\d+%)+[\s]*$/)){
                return text.replace(/<br>/g,"\n")+"\n";
            }else{
                return defParagraph(text);
            }
        }
        return marked_instance;
    }

    return set_p_renderer(marked);
} 


export const getMarkedRenderer = () => {
    return new marked.Renderer();
}