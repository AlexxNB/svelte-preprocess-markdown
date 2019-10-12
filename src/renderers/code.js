import marked from 'marked';

const defaultRenderer = new marked.Renderer();

export default function renderer_code (text,info,escaped) {
    var lang = (info || '').match(/\S+/g);

    if(!!lang && lang[0] === 'html' && lang[1] === 'svelte')
        return `${text}`;
    else
        return defaultRenderer.code(text,info,escaped);
};