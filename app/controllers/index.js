var renew = true;
var decimalPointAppend = false;
var nextOperator = '';

$.reset.addEventListener('click', function(e) {
	$.textArea.text = "0";
	renew = '';
	decimalPointAppend = false;
	nextOperator = '';
});

$.n0.addEventListener('click', function(e) {
	if ($.textArea.text.length > 0 && $.textArea.text != "0") {
		getNumber("0");
	}
});
$.n1.addEventListener('click', function(e) {
	getNumber("1");
});
$.n2.addEventListener('click', function(e) {
	getNumber("2");
});
$.n3.addEventListener('click', function(e) {
	getNumber("3");
});
$.n4.addEventListener('click', function(e) {
	getNumber("4");
});
$.n5.addEventListener('click', function(e) {
	getNumber("5");
});
$.n6.addEventListener('click', function(e) {
	getNumber("6");
});
$.n7.addEventListener('click', function(e) {
	getNumber("7");
});
$.n8.addEventListener('click', function(e) {
	getNumber("8");
});
$.n9.addEventListener('click', function(e) {
	getNumber("9");
});

$.point.addEventListener('click', function(e) {
	if (decimalPointAppend)
		;
	else {
		decimalPointAppend = true;
		getNumber('.');
	}
});

$.del.addEventListener('click', function(e) {
	var num = $.textArea.text;
	Ti.API.info('num before slice == ' + num);
	num = num.slice(0, -1);
	Ti.API.info('num == ' + num);
	$.textArea.text = num;
});

$.plus.addEventListener('click', function(e) {
	renew = true;
	doOperation('+', $.textArea.text);
});

$.minus.addEventListener('click', function(e) {
	renew = true;
	doOperation('-', $.textArea.text);
});

$.multiply.addEventListener('click', function(e) {
	renew = true;
	doOperation('*', $.textArea.text);
});

$.divide.addEventListener('click', function(e) {
	renew = true;
	doOperation('/', $.textArea.text);
});

$.equal.addEventListener('click', function(e) {
	renew = true;
	doOperation('=', $.textArea.text);
});

function getNumber(number) {
	Ti.API.info('renew == ' + renew);
	if (renew) {
		Ti.API.info('renew == ' + renew);
		renew = false;
		$.textArea.text = number;
	} else {
		Ti.API.info('renew == ' + renew);
		if ($.textArea.text == '0') {
			$.textArea.text = number;
		} else {
			$.textArea.text = $.textArea.text + number;
		}
	}
}

function doOperation(operator, currentValue) {
	Ti.API.info('current value ==' + currentValue);
	Ti.API.info('operator ==' + operator);
	if (operator != '=') {
		$.textArea.text = currentValue + operator;
		Ti.API.info('label = ' + $.textArea.text);
	}
	Ti.API.info('number = ' + $.textArea.text);
	currentValue = parseFloat(currentValue);

	if (nextOperator.length == 0) {
		nextOperator = operator;
		answer = currentValue;
	} else {
		switch (nextOperator) {
		case '+':
			answer = answer + currentValue;
			break;
		case '-':
			answer = answer - currentValue;
			break;
		case '*':
			answer = answer * currentValue;
			break;
		case '/':
			answer = answer / currentValue;
			break;
		case '=':
			answer = currentValue;
			break;

		}
	}
	Ti.API.info('answer ==' + answer);
	$.textArea.text = answer;
	nextOperator = operator;
	decimalPointAppend = false;
}

$.index.open();