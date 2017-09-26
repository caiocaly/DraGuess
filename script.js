var version = 2.0;
var guessedAnswers =[]; //array que vai armazenar as respostas que já foram acertada
var listOfGuessedIndexes = [];
var achievementsList = [];
var timerStarted = false; //controla o começo do timer
var total = correctAnswers.length; //var que vai armazenar as respostas corretas
var timeLimit = { //tempo disponível
	minutes: 0,
	seconds: 34,
	hurryUp: 30, //quando o timer vai começar a piscar
	}

function write(id, content){
	document.getElementById(id).innerHTML = content;
}

function start() {	
	idThisCrap(correctAnswers);
	createAchievements();
	updateCounter();
	document.getElementById('textBox').value = "Type then press enter";
	write('sub', `How many RPDR contestants can you name in only ${timeLimit.minutes} minutes?`);
	write('version', `Ver. ${version}, `);
	// checkEmptyMessage();
	console.log("Guessed indexes: " + listOfGuessedIndexes);
	}

function updateCounter() { //ela atualiza um contador de respostas certas x quantas faltam
	let toGo = correctAnswers.length; // # respostas que falta acertar
	let guessed = guessedAnswers.length; //# respostas acertadass
	let countResult = `${guessed} guessed, ${toGo} to go.`; //texto que vai na tela
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


	checkAchievements();
	console.log("list of guessed indexes: " + listOfGuessedIndexes);
	console.log("List of achievements: " + achievementsList)

	console.log(achievementsList[1].condition);
	console.log(achievementsList[1].achieved);
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
	  document.getElementById('timer').innerHTML = `Time left: ${minString}:${secString}`;
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
	switch (true) {
		case (score == total):
			read = "Parabéns Junior! ;)"
			break;
		case (score> 80):
			read = "COME THROUGH MAMA! You're a champion!!! How can you even type so fast?"
			break;
		case (score >60):
			read = "YASSS QUEEN! Impressive memory!";
			break;
		case (score >40):
			read = "Excellent!"
			break;
		case (score >20):
			read = "Nice job, you remember quite a few.";
			break;
		case (score >10):
			read = "DO you even like RPDR? (That stands for RuPaul's Drag Race, in case you don't know)";
			break;
		case (score > 0):
			read = "Tell me honestly: did you ever watch the show?";
			break;
		default:
			read = "WHAT? Do you even know what a drag queen is?";
			break;
	}

	document.getElementById('mainBox').innerHTML += `
		<h2> ${read} </h2>
		<h3> You got ${score} out of ${total} </h3>
		<button onclick="reload()"> Try again? </button>`;
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

function checkEmptyMessage (){
	let x =[];
	for (i=0; i < correctAnswers.length; i++){
		if (correctAnswers[i].correctMessage == undefined){
		x.push(correctAnswers[i].name[0]);	
		}
	}
	console.log(x);
}