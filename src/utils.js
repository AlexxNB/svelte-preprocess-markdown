import marked from 'marked'

export const getMarkedInstance = (options) =>{
    options = {headerIds:false,...options};
    marked.setOptions(marked.getDefaults());
    marked.setOptions(options);


    const set_p_renderer = (marked_instance) => {
        const renderer = new marked_instance.Renderer();
        const defaultRenderer = new marked_instance.Renderer();
        renderer.paragraph = (text) => {
            if(text.match(/^([\s]*%svelte\-md\-block\-\w+\-\d+%)+[\s]*$/)){
                return text.replace(/<br>/g,"\n")+"\n";
            }else{
                return defaultRenderer.paragraph(text);
            }
        }
        marked_instance.setOptions({renderer});
        return marked_instance;
    }

    return set_p_renderer(marked);
} 


export const getMarkedRenderer = () => {
    return new marked.Renderer();
}