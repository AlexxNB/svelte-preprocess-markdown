export default function systemTags() {
    let savedSystags = [];
    let id = 0;

    const systags_replacer = (text) => {
        savedSystags[id++] = text;
        return '```svelte-md-systag-'+id+'```';
    }

    const systags_restorator = (text,id) => {
        return savedSystags[id-1];
    }

    const before = (text,options) => {
        const re = /<(?:script|style)[^>]*>[^]*?<\/.+>/gmi
        text = text.replace(re,systags_replacer);
        return text;
    }

    const after = (text,options) => {
        const re = /<.+>svelte\-md\-systag\-(\d+)<\/.+>/g;
        text = text.replace(re,systags_restorator);
        return text;
    }
    return {before,after}
}