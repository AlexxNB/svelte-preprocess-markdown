import { getMarkedInstance,getMarkedRenderer } from './utils'
import {moduleStore} from './store';

//handlers
import systemTags from './handlers/systemTags'
import interpolation from './handlers/interpolation'
import tags from './handlers/tags'
import logic from './handlers/logic'
import code from './handlers/code'
import meta from './handlers/meta'


//order is important
const handlers = [
    meta(),
    code(),
    systemTags(),
    logic(),
    interpolation(),
    tags(),
]

export function markdown(options={}) {
    const marked = getMarkedInstance(options);
    options.filetype = options.filetype || 'md';
    return {
        markup({ content, filename }) {
            if(filename.endsWith(`.${options.filetype}`)){

                for(let i=0; i<handlers.length; i++){
                    content = handlers[i].before(content,marked);
                }
                
                content = marked(content);

                for(let i=(handlers.length-1); i>=0; i--){
                    content = handlers[i].after(content,marked);
                }

                content = generateScriptModule(content);
            }
            return { code: content };
        }
    };
}

function generateScriptModule(text){
    const lines = moduleStore.get();

    if(lines.length > 0) {
        const result = /^[\t ]*(<script[\t ]+?context="module"[\t ]*?>)[\S\s]*?<\/script>/gi.exec(text)
        if(result){
            text = text.replace(result[1],`${result[1]}\n${lines.join(";\n")}\n`);
        }else{
            text = `<script context="module">\n${lines.join("\n")}\n</script>\n${text}`;
        }
        moduleStore.clear();
    }

    return text;
}

export function Renderer() {
    return getMarkedRenderer();
}