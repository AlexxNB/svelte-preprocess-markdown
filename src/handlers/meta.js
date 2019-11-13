import fm from 'front-matter';
import {moduleStore} from './../store';

export default function tags() {
   
    const before = (text,processor) => {
        const {attributes,body} = fm(text);
        if(Object.keys(attributes).length > 0){
            moduleStore.add(`export const META = ${JSON.stringify(attributes)};`);
        }
        return body;
    }

    const after = (text,processor) => {
        return text;
    }

    return {before,after}
}