import {extname} from 'path'
import marked from 'marked'

const defaultRenderer = new marked.Renderer();
const renderer = new marked.Renderer();

renderer.code = function (text,info,escaped) {
    var lang = (info || '').match(/\S+/g);
    if(!lang) return defaultRenderer.code(text,info,escaped);
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


function systagsHandler(options) {
    let savedSystags = [];
    let id = 0;

    const systags_replacer = (text) => {
        savedSystags[id++] = text;
        return '```svelte-md-systag-'+id+'```';
    }

    const systags_restorator = (text,id) => {
        return savedSystags[id-1];
    }

    const retrieve = (text) => {
        const re = /<(?:script|style)[^>]*>[^]*?<\/.+>/gmi
        text = text.replace(re,systags_replacer);
        return text;
    }

    const restore = (text) => {
        const re = /<.+>svelte\-md\-systag\-(\d+)<\/.+>/g;
        text = text.replace(re,systags_restorator);
        return text;
    }
    return {retrieve,restore}
}


function tagsHandler(options) {
    let savedTags = [];
    let id = 0;

    const tags_replacer = (text) => {
        savedTags[id++] = text;
        return '```svelte-md-tag-'+id+'```';
    }

    const tags_restorator = (text,id) => {
        return savedTags[id-1];
    }

    const retrieve = (text) => {
        const re = /<\/?[^]+?>/gm
        text = text.replace(re,tags_replacer);
        return text;
    }

    const restore = (text) => {
        const re = /<code>svelte\-md\-tag\-(\d+)<\/code>/g;
        text = text.replace(re,tags_restorator);
        return text;
    }
    return {retrieve,restore}
}
//i11n - interpolation
function i11nHandler(options) {
    let savedI11ns = [];
    let id = 0;

    const i11n_replacer = (text) => {
        savedI11ns[id++] = text;

        return `%svelte-md-i11n-${id}%`;
    }

    const i11n_restorator = (text,id) => {
        return savedI11ns[id-1];
    }



    const retrieve = (text) => {
        const re = /{[^{}]+}/mg;
        while(text.match(re)){
            text = text.replace(re,i11n_replacer);
        }
        return text;
    }

    const restore = (text) => {
        const re = /\%svelte\-md\-i11n\-(\d+)\%/g;
        while(text.match(re)){
            text = text.replace(re,i11n_restorator);
        }
        return text;
    }

    return {retrieve,restore}
}


export function markdown(options={}) {
     options = {renderer,...options};
   
    return {
        markup({ content, filename }) {
            if(extname(filename).startsWith('.md')){
                let i11n = i11nHandler(options);
                let tags = tagsHandler(options);
                let systags = systagsHandler(options);
               
                content = systags.retrieve(content);
                content = i11n.retrieve(content);
                content = tags.retrieve(content);
                content = marked(content,options);
                content = tags.restore(content);
                content = i11n.restore(content);
                content = systags.restore(content);
            }

            return { code: content };
        }
    };
}

export function Renderer() {
    return renderer;
}