var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var inputs = ['R:EUR=', 'EUR='];

suite.add('.toUpperCase+.indexOf', function() {
  'R:EUR='.toUpperCase().indexOf('R:') === 0;
})
.add('//.test', function() {
  /^R:/i.test('R:EUR=');
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ 'async': true });
