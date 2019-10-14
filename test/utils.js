
const hljs = require('highlight.js/lib/highlight');
const xml_lang = require('highlight.js/lib/languages/xml');
const js_lang = require('highlight.js/lib/languages/javascript');
const bash_lang = require('highlight.js/lib/languages/bash');
const css_lang = require('highlight.js/lib/languages/css');
hljs.registerLanguage('xml', xml_lang);
hljs.registerLanguage('javascript', js_lang);
hljs.registerLanguage('bash', bash_lang);
hljs.registerLanguage('css', css_lang);



exports.highlight = function (code, lang) {
    let result = hljs.highlight(lang,"\n"+code);
    return result.value;
}