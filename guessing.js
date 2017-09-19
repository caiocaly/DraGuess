function start() {
	updateCounter(); //chama a função updateCounter() ao inicializar a pagina (veja abaixo)
}

function updateCounter() { //ela atualiza um contador de respostas certas x quantas faltam
	let toGo = correctAnswers.length; // # respostas que falta acertar
	let guessed = guessedAnswers.length; //# respostas acertadass
	let countResult = `${guessed} guessed, ${toGo} to go.`; //texto que vai na tela
	document.getElementById('answerCounter').innerHTML = countResult;
}

function checkAnswer () { //essa função verifica se a resposta está certa

	var isCorrect, isRepeated, feedbackTxt; //variáveis que vamos usar na função;

	guess = document.getElementById("textBox").value; //pega o que o usuário digitou
	guess = guess.toLowerCase(); //converte pra caixa baixa, ajuda a reduzir erros bobos
	while(guess.indexOf(" ") !== -1){ //esse loop elimina todos os espaços em branco da resposta, ajuda a reduzir erros bobos
		guess = guess.replace(" ","");  //enquanto houver espaço branco na string -> substitui um espaço em branco por nenhum espaço
	}

	for (i = 0; i < correctAnswers.length; i++) { //verifica se o input dado pelo usuário está na lista de respostas que falta acertar
		if (guess == correctAnswers[i]){
			isCorrect = true; 
			x = correctAnswers.splice(i,1); //tira do array de respostas que falta
			guessedAnswers.push(x); //e coloca no array de respostas acertadas
			feedbackTxt = correctMessages[random(correctMessages.length)];
			document.getElementById('guessedAnswers').innerHTML += `${x}<br>`;

		}
	}

	 if (isCorrect != true) {
		for (i = 0; i < guessedAnswers.length; i++) {
			if (guess == guessedAnswers[i]){
				var isRepeated = true;
			}
		}
		isRepeated ? feedbackTxt= 'You alredy guessed that one!' : feedbackTxt = 'Incorrect answer';
	}

	updateCounter();
	let feedbackColor;
	isCorrect ? feedbackColor = 'green' : feedbackColor = 'red';
	document.getElementById('feedback').style.color = feedbackColor;
	document.getElementById('feedback').innerHTML = feedbackTxt;
	clearInput();



}

function keyPressed (e) {
	if (e.keyCode == 13){
		checkAnswer()
	} else {
	}
}

function random(max){
	return Math.floor(Math.random() * max); 
}

function clearInput() {
	document.getElementById('textBox').style.color = 'black';
	document.getElementById('textBox').value = "";

}