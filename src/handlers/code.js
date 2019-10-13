export default function code() {

    const code_sanitizer = (text) => {
        text = text.replace(/{/g,'&#123;').replace(/}/g,'&#125;');
        return text;
    }

    const before = (text,processor) => {
        return text
    }

    const after = (text,processor) => {
        const re = /<pre[\s\S]*>[\s\S]*<code[\s\S]*>[\s\S]*<\/code>[\s\S]*<\/pre>/gm        
        return text.replace(re,code_sanitizer);
    }
    return {before,after}
}