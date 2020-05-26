const {Renderer} = require('./../dist');

const renderer = Renderer();

renderer.heading = (text) => {
    return `<HEADER>${text}</HEADER>`;
}

module.exports = {
    renderer
}