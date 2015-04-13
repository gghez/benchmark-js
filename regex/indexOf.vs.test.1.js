function benchit(func, iter, title) {
    var start = new Date();

    for (var i = 0; i < iter; i++) {
        func();
    }

    var end = new Date();

    console.log(title, (end - start), 'ms.');
}

var inputs = ['R:EUR=', 'EUR='];

function indexOfTest() {
    for (var j = 0; j < inputs.length; j++) {
        var test = inputs[j].toUpperCase().indexOf('R:') >= 0;
    }
}

function regexTest() {
    for (var j = 0; j < inputs.length; j++) {
        var test = /^R:/i.test(inputs[j]);
    }
}

var ITER = 5000000;

benchit(indexOfTest, ITER, 'index Of');
benchit(regexTest, ITER, 'regex');
