
function benchit(func, title) {
	var start  = new Date();

	func();

	var end = new Date();

	console.log(title, (end - start), 'ms.');
}

var inputs = ['R:EUR=', 'EUR='];

function upperCaseIndexOf() {

	for (var i=0; i< 5000000; i++) {
		for (var j=0; j<inputs.length; j++){
			var test = inputs[j].toUpperCase().indexOf('R:') === 0;
		}
	}
}

function regex() {
	for (var i=0; i<5000000; i++){
		for (var j=0; j<inputs.length; j++) {
			var test = /^R:/i.test(inputs[j]);
		}
	}
}

benchit(upperCaseIndexOf, 'index Of');
benchit(regex, 'regex');

// Output: regex is more efficient.
