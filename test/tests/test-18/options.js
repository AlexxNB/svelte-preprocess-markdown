const {Renderer} = require('./../../../dist/index.js');

const renderer = Renderer();
renderer.hr = function() { return 'myhr' }

exports.options = {renderer};