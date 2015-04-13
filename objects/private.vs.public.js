var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

var publicObj = {
    a: 0
};
function privateFunc(_this){
    _this.a = 5;
}

var anObj = {
    a: 0,
    publicFunc: function(){
        this.a = 5;
    }
}

suite.add('object function call', function() {
  anObj.publicFunc();
})
.add('private object function call', function() {
  privateFunc(publicObj);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ 'async': true });

// Private call is faster.
