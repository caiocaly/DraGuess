var total = correctAnswers.length;


function updateCounter() { //ela atualiza um contador de respostas certas x quantas faltam
	let toGo = correctAnswers.length; // # respostas que falta acertar
	let guessed = guessedAnswers.length; //# respostas acertadass
	let countResult = (text.remainingAnswers[language].replace("_guessed", guessed)).replace("_togo", toGo);
	write('answerCounter', countResult);
	}

function checkAnswer () { //essa função verifica se a resposta está certa
	var isCorrect, isRepeated, feedbackTxt; //variáveis que vamos usar na função;
	if (timerStarted == false) {
		timer();
		timerStarted = true;
	}
	guess = normalize(document.getElementById("textBox").value);
	console.log("User guessed " + guess);
	for (i = 0; i < correctAnswers.length; i++) { //verifica se o input dado pelo usuário está na lista de respostas que falta acertar
		for (j = 0; j < correctAnswers[i].name.length; j++){
			let answerBeingChecked = normalize(correctAnswers[i].name[j]);
			if (guess == answerBeingChecked){
				isCorrect = true; 
				document.getElementById('guessedAnswers').innerHTML += `${correctAnswers[i].name[0]}<br>`;
				if (correctAnswers[i].correctMessage) {
					feedbackTxt = correctAnswers[i].correctMessage;
				} else {
					let rndNum = random(text.genericCorrectMessage[language].length);
					feedbackTxt = text.genericCorrectMessage[language][rndNum];
				}
				transferDrag(i);
			}
		}
	}
	if (isCorrect != true) {
		for (i = 0; i < guessedAnswers.length; i++) {
			for (j = 0; j < guessedAnswers[i].name.length; j++){
				let answerBeingChecked = normalize(guessedAnswers[i].name[j]);
					if (guess == answerBeingChecked){
					repeatedName = guessedAnswers[i].name[0];
					var isRepeated = true;
				}
			}
		}
		if (isRepeated === true) {
			feedbackTxt = text.alreadyGuessed[language] + repeatedName;
		} else {
			x = text.incorrectAnswerFeedback[language];
			feedbackTxt =  x[random(x.length)];
		}
	}
	updateCounter();
	let feedbackColor;
	isCorrect ? feedbackColor = 'green' : feedbackColor = 'red';
	document.getElementById('feedback').style.color = feedbackColor;
	document.getElementById('feedback').innerHTML = feedbackTxt;
	clearInput();
	checkAchievements();
}

function keyPressed (e) { //checa se o usuário apertou enter
	if (e.keyCode == 13){
		checkAnswer()
	} else {
	}
}

function random(max){ //n. aleatório entre 0 e argumento
	return Math.floor(Math.random() * max); 
}

function clearInput() { //limpa caixa de input
	document.getElementById('textBox').style.color = 'black';
	document.getElementById('textBox').value = "";
}

function transferDrag(position){ //tira uma drag de um array e bota no outro
	listOfGuessedIndexes.push(correctAnswers[position].id);
	let dragTransfer = correctAnswers.splice(position,1); 
	guessedAnswers.push(dragTransfer[0]);
}


function normalize(x){ // converte uma string pra caixa baixa e remove todos os espaços em branco 
							// exemplo: Caio Caly -> caiocaly
	x = x.toLowerCase();
	while(x.indexOf(" ") !== -1){
		x = x.replace(" ","");
	}
	return x;
}

function timer(){ // conta o tempo
  var min = timeLimit.minutes;
  var sec = timeLimit.seconds;
  var minString, secString;
  timer = setInterval(function(){
	  min >= 10? minString = min : minString = "0" + min; 
	  sec >= 10? secString = sec : secString = "0" + sec;
	  document.getElementById('timer').innerHTML = text.timeLeft[language] + minString+ ":" + secString;
	  if( min == 0 && sec ==0) { 
	      clearInterval(timer);
	      clearInterval(blink);
	      endGame(); 
	    };

	  if (sec == 0) {
	      min--;
	      sec=59;
	  } else {
	      sec--;
	  }
	  if (min == 0 && sec == timeLimit.hurryUp){
	  timerBlink();
	  }
  }, 1000);
}

function reload(){ location.reload()};

function endGame() {
	let score = guessedAnswers.length;
	let read = "";
	document.getElementById('mainBox').innerHTML ="";
	let guessed = guessedAnswers.length;
	let endMsg = text.endGameMessages[language];
	switch (true) {
		case (score == total):
			read = endMsg[0]
			break;
		case (score> 80):
			read = endMsg[1]
			break;
		case (score >60):
			read = endMsg[2]
			break;
		case (score >40):
			read = endMsg[3]
			break;
		case (score >20):
			read = endMsg[4]
			break;
		case (score >10):
			read = endMsg[5]
			break;
		case (score > 0):
			read = endMsg[6]
			break;
		default:
			read = endMsg[7]
			break;
	}

	let resultado = text.result[language];
	document.getElementById('mainBox').innerHTML += `
		<h2> ${read} </h2>
		<h3> ${resultado[0]} ${score} ${resultado[1]} ${total} </h3>
		<button onclick="reload()"> ${text.tryAgain[language]} </button>`;
}

function timerBlink(){
	var currentColor;
	blink = setInterval(function(){
	  	if (currentColor !== 'red'){
	  		currentColor = 'red';
	  	} else {
	  		currentColor = 'black';
	  	}
	  	document.getElementById('timer').style.color = currentColor;
		}, 500);
}


function snackbar(content) {
    // Get the snackbar DIV
    document.getElementById("snackbar").innerHTML = '<i>' + content + '</i> unlocked';
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


function write(id, content){
	document.getElementById(id).innerHTML = content;
}