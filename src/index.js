import {extname} from 'path'
import marked from 'marked'

//handlers
import systemTags from './handlers/systemTags'
import interpolation from './handlers/interpolation'
import tags from './handlers/tags'

//renderers
import renderer_code from './renderers/code'


//order is important
const handlers = [
    systemTags(),
    interpolation(),
    tags(),
]

const renderer = new marked.Renderer();
renderer.code = renderer_code

export function markdown(options={}) {
     options = {renderer,headerIds:false,...options};

    return {
        markup({ content, filename }) {
            if(extname(filename).startsWith('.md')){

                for(let i=0; i<handlers.length; i++){
                    content = handlers[i].before(content,options);
                }
                
                content = marked(content,options);

                for(let i=(handlers.length-1); i>=0; i--){
                    content = handlers[i].after(content,options);
                }
            }
            return { code: content };
        }
    };
}

export function Renderer() {
    return renderer;
}