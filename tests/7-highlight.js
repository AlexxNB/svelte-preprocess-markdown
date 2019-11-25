const hljs = require('highlight.js/lib/highlight');
const xml_lang = require('highlight.js/lib/languages/xml');
const js_lang = require('highlight.js/lib/languages/javascript');
const css_lang = require('highlight.js/lib/languages/css');
const hljs_svelte = require('highlightjs-svelte');
hljs.registerLanguage('xml', xml_lang);
hljs.registerLanguage('javascript', js_lang);
hljs.registerLanguage('css', css_lang);
hljs_svelte(hljs);

module.exports = {
    highlight
}

function highlight(code, lang) {
    let result = hljs.highlight(lang,code).value;
    return result;
}