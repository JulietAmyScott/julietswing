/**
babel  ES6
 * This will limit the number of characters for an input field.
 * 
 */
function limitFieldChars(field, limit) { 
    field.value = field.value.slice(0, limit);
}

/**
 * This function runs once the page is loaded.
 */
function on() { 
    var expYearField = document.getElementById('expYear');
    var expMonthField = document.getElementById('expMonth');
    
    expYearField.addEventListener(
        'keyup', 
        function() { limitFieldChars(expYearField, 4)}
    );

    expMonthField.addEventListener( 
        'keyup',
        function() { limitFieldChars(expMonthField, 2)}
    );
}

function checkValue() {
	var expYear = document.getElementById("expYear").value;
	var resultText	= document.getElementById('textBox');

  	if (expYear > 2019 || expYear < 2012) {
    	resultText.innerHTML = "This card has expired";
  	}
  	if (expYear == null || expYear == "") {
    	resultText.innerHTML = "Add year of expiration ";
    	console.log(expYear);
  	}
}
  	var submit = document.getElementById("submitButton");
	submit.addEventListener("click", checkValue, false);


// function myFunction() {
//     var age, voteable;
//     age = document.getElementById("age").value;
//     voteable = (age < 18) ? "Too young":"Old enough";
//     document.getElementById("demo").innerHTML = voteable + " to vote.";
//     console.log(age, voteable);
// }

// function myFunction() {
//     var age, voteable;
//     age = document.getElementById("age").value;
//     if (age > 18) {
//     	console.log("welcome");
//     }
// }

// var checkexp = document.getElementById('expYear');
// var expValue = checkexp.value;
// var submit = document.getElementById('submitButton');
// var submitText	= document.getElementById('textBox');

// submit.onclick = function() {
	// if (expValue == null || expValue == "") {
	// 	document.getElementById('textBox').innerHTML = "Good Day";
	// }
// 	if (expValue == 2004) {
// 	document.getElementById('textBox').innerHTML = "Even Better";
// 	}
// }
