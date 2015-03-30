var ITERATIONS = 1000000;

function buildArray(size) {
    var arr = [];
    for (var i = 0; i < size; i++) {
        arr[i] = i;
    }
    return arr;
}

function bmLength(iterations, size) {
    var arr = buildArray(size);
    var start = new Date();
    for (var i = 0; i < iterations; i++) {
        arr.length = size - 1;
        arr.unshift(i);
    }
    var end = new Date();
    return end - start;
}

function bmSlice(iterations, size) {
    var arr = buildArray(size);
    var start = new Date();
    for (var i = 0; i < iterations; i++) {
        arr = arr.slice(0, size - 1);
        arr.unshift(i);
    }
    var end = new Date();
    return end - start;
}

function bmSplice(iterations, size) {
    var arr = buildArray(size);
    var start = new Date();
    for (var i = 0; i < iterations; i++) {
        arr.splice(size - 1, 1);
        arr.unshift(i);
    }
    var end = new Date();
    return end - start;
}

[10, 100, 1000, 5000].forEach(function (arrSize) {
    setTimeout(function () {
        var lengthDuration = bmLength(ITERATIONS, arrSize);
        var sliceDuration = bmSlice(ITERATIONS, arrSize);
        var spliceDuration = bmSplice(ITERATIONS, arrSize);

        console.log('[', arrSize, ']', 'length:', lengthDuration, 'slice:', sliceDuration, 'splice:', spliceDuration);
    }, 0);
});

