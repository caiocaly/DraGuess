var correctAnswers = [
'Mary',
'John',
'Robert'];


function checkAnswer () {

	guess = document.getElementById("form").elements[0].value;

	for (index = 0; index < correctAnswers.length; index++) {
		if (guess == correctAnswers[index]){
			console.log('correct');
		}
	}

	console.log(`User guessed: "${guess}"`);
}