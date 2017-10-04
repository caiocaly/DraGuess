var language; //0 english 1 portuguese


var timeLimit = { //tempo disponível
	minutes: 5,
	seconds: 0,	
	hurryUp: 30, //quando o timer vai começar a piscar
	}

var listOfGuessedIndexes = [];
var achievementsList = [];
var timerStarted = false; //controla o começo do timer
var guessedAnswers =[]; //array que vai armazenar as respostas que já foram acertada


function start(chooseLanguage) {	
	language = chooseLanguage;
	createAchievements();
	updateCounter();
	document.getElementById('textBox').value = text.type[language];

	write('sub', text.subtitle[language]);
	write('guessedTitle', text.guessedTitle[language]);
	write('achievementsTitle', text.achievementsTitle[language]);
	write('submitButton', text.submitButton[language])
	}
