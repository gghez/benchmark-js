var Benchmark = require('benchmark'); // npm install benchmark
var suite = new Benchmark.Suite;

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
