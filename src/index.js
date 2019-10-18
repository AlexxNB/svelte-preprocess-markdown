import { getMarkedInstance,getMarkedRenderer } from './utils'

//handlers
import systemTags from './handlers/systemTags'
import interpolation from './handlers/interpolation'
import tags from './handlers/tags'
import logic from './handlers/logic'
import code from './handlers/code'


//order is important
const handlers = [
    code(),
    systemTags(),
    logic(),
    interpolation(),
    tags(),
]

export function markdown(options={}) {
    const marked = getMarkedInstance(options);
    return {
        markup({ content, filename }) {
            if(filename.endsWith('.md')){

                for(let i=0; i<handlers.length; i++){
                    content = handlers[i].before(content,marked);
                }
                
                content = marked(content);

                for(let i=(handlers.length-1); i>=0; i--){
                    content = handlers[i].after(content,marked);
                }
            }
            return { code: content };
        }
    };
}

export function Renderer() {
    return getMarkedRenderer();
}