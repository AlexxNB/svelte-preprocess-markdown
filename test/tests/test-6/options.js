exports.options = {
    highlight: function (code,lang,callback) {
        return '<highlight lang="'+lang+'">'+code+'</highlight>';
    }
};