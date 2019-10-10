import {extname} from 'path'
import marked from 'marked'

const defaultRenderer = new marked.Renderer();
const renderer = new marked.Renderer();

renderer.code = function (text,info,escaped) {
    var lang = (info || '').match(/\S+/g);
    if(lang[0] === 'js' && lang[1] === 'script')
        return `<script>${text}</script>`;
    else if(lang[0] === 'js' && lang[1] === 'module')
        return `<script context="module">${text}</script>`;
    else if(lang[0] === 'html' && lang[1] === 'svelte')
        return `${text}`;
    else if(lang[0] === 'css' && lang[1] === 'style')
        return `<style>${text}</style>`;
    else if(lang[1] === 'style')
        return `<style type="text/${lang[0]}">${text}</style>`;
    else
        return defaultRenderer.code(text,info,escaped);
};



export function markdown(options) {
    options = {renderer,...options};

    return {
        markup({ content, filename }) {
            if(extname(filename).startsWith('.md')){
                content = marked(content,options);
            }

            return { code: content };
        }
    };
}

export function Renderer() {
    return renderer;
}