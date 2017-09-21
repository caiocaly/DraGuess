var guessedAnswers =[]; //array que vai armazenar as respostas que já foram acertada
var timerStarted = false;
var total = correctAnswers.length;
var timeLimit = {
	minutes: 5,
	seconds: 0,
	hurryUp: 30,
}

function start() {	
updateCounter(); //chama a função updateCounter() ao inicializar a pagina (veja abaixo)
document.getElementById('textBox').value = "Type then press enter";
checkEmptyMessage();
}

function updateCounter() { //ela atualiza um contador de respostas certas x quantas faltam
let toGo = correctAnswers.length; // # respostas que falta acertar
let guessed = guessedAnswers.length; //# respostas acertadass
let countResult = `${guessed} guessed, ${toGo} to go.`; //texto que vai na tela
document.getElementById('answerCounter').innerHTML = countResult;
}

function checkAnswer () { //essa função verifica se a resposta está certa
	var isCorrect, isRepeated, feedbackTxt; //variáveis que vamos usar na função;
	if (timerStarted == false) {
		timer();
		timerStarted = true;
	}
	guess = normalize(document.getElementById("textBox").value);
	console.log("guessed " + guess);
	for (i = 0; i < correctAnswers.length; i++) { //verifica se o input dado pelo usuário está na lista de respostas que falta acertar
		for (j = 0; j < correctAnswers[i].name.length; j++){
			let answerBeingChecked = normalize(correctAnswers[i].name[j]);
			if (guess == answerBeingChecked){
				isCorrect = true; 
				document.getElementById('guessedAnswers').innerHTML += `${correctAnswers[i].name[0]}<br>`;
				if (correctAnswers[i].correctMessage) {
					feedbackTxt = correctAnswers[i].correctMessage;
				} else {
					feedbackTxt = "right";
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
					repeatedName = guessedAnswers[i].name[j];
					var isRepeated = true;
				}
			}
		}
		isRepeated ? feedbackTxt= `You alredy guessed ${repeatedName}` : feedbackTxt = 'Incorrect answer';
	}
	updateCounter();
	let feedbackColor;
	isCorrect ? feedbackColor = 'green' : feedbackColor = 'red';
	document.getElementById('feedback').style.color = feedbackColor;
	document.getElementById('feedback').innerHTML = feedbackTxt;
	clearInput();
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
	  document.getElementById('timer').innerHTML = `Time left: ${minString}:${secString}`;
	  if( min == 0 && sec ==0) { 
	      clearInterval(timer);
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

function addToResults (content) {
	document.getElementById('results').innerHTML += `<p> ${content} <p>`;
}

function checkEmptyMessage (){
	let x =[];
	for (i=0; i < correctAnswers.length; i++){
		if (correctAnswers[i].correctMessage == undefined){
		x.push(correctAnswers[i].name[0]);	
		}
	}
	console.log(x);
}

function reload(){ location.reload()};

function endGame() {
	let score = guessedAnswers.length;
	let read = "";
	allElements = document.getElementsByTagName('*');
	for (i = 0; i < allElements.length; i++){
		allElements[i].style.visibility = 'hidden';
	}
	document.getElementById('results').style.visibility = "visible";
	let guessed = guessedAnswers.length;
	addToResults(`You got ${score} out of ${total}`);
	switch (true) {
		case (score == 0):
			read = "Do you even know what a drag queen is?";
			break;
		case (score > 0 && score <=10):
			read = "Did you even try?";
			break;
		case (score >10 && score <=20):
			read = "Bad but could be worse. You'd be a decent filler queen.";
			break;
		case (score >20 && score <=40):
			read = "Nice job, you watched the show!";
			break;
		case (score >40 && score <=60):
			read = "That's a lot!! Condragulations!"
			break;
		case (score >60 && score <=80):
			read = "Yasss queen, impressive!";
			break;
		case (score> 80 && score<total):
			read = "COME THROUGH MAMA!  That was amazing!!!!"
			break;
		case (score == total):
			read = "That's just impossible. You cheated."
			break;
	}
	addToResults(read);
	document.getElementById('results').innerHTML += `<button onclick="reload()"> Try again? </button>`;
}

function timerBlink(){
	var currentColor;
	setInterval(function(){
	  	if (currentColor != 'red'){
	  		currentColor = "red";
	  	} else {
	  		currentColor = "black";
	  	}
	  	document.getElementById('timer').style.color = currentColor;
		}, 500);
}