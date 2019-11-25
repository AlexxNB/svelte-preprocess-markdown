var test = require('tape');

module.exports.doTesting = function(snaplist){
    snaplist.forEach(snapshot => {
        test(snapshot.name, function (t) {
            t.equal(snapshot.result,snapshot.snapshot);
            t.end();
        });
    })
}
