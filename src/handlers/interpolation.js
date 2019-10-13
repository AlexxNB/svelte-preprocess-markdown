import codehider from './_codehider';

export default function interpolation() {
    let savedI11ns = [];
    let id = 0;

    const i11n_replacer = (text) => {
        savedI11ns[id++] = text;

        return `%svelte-md-i11n-${id}%`;
    }

    const i11n_restorator = (text,id) => {
        return savedI11ns[id-1];
    }

    const before = (text,marked) => {
        const ch = codehider(/(```[\w]+((?!```[\w])[\S\s])*)[{}](((?!```[\w])[\S\s])*```(?![\w]))/gmi);
        text = ch.hide(text);

        const re = /{[^{}]+}/mg;
        while(text.match(re)){
            text = text.replace(re,i11n_replacer);
        }

        text = ch.unhide(text);
        return text;
    }

    const after = (text,marked) => {
        const re = /\%svelte\-md\-i11n\-(\d+)\%/g;
        while(text.match(re)){
            text = text.replace(re,i11n_restorator);
        }
        return text;
    }

    return {before,after}
}