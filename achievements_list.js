class Achievement {
	constructor (type, title, subtitle, howToGet, condition) {
		this.type = type;
		this.title = title;
		this.subtitle = subtitle;
		this.howToGet = howToGet;
		this.condition = this.indexDrags(condition);
		this.achieved = false;
	}

	indexDrags (conditionList) {
		let indexes = [];
		for (let k = 0; k < conditionList.length; k++) {
			let currentCondition = normalize(conditionList[k]);

			for (let i = 0; i < correctAnswers.length; i++) {
				for (let j = 0; j < correctAnswers[i].name.length; j++){
					let answerBeingChecked = normalize(correctAnswers[i].name[j]);
					if (currentCondition == answerBeingChecked){
						indexes.push(correctAnswers[i].id);
					}
				}
			}

		}
		return indexes.sort(function(a, b){return a-b}); 
	}
}


function checkAchievements () {
	achievementsList.forEach(function(item, index){
		switch (item.type) {
			case 1:
				var target = listOfGuessedIndexes;
				break;
			case 2:
				var target = listOfGuessedIndexes.slice(-item.condition.length);
		} 
		if (item.achieved === false) { // só verifica achievements ainda não alcançados
			for (i = 0; i < item.condition.length; i++ ) {
				if (target.indexOf(item.condition[i]) === -1) { break 
				} else if (i === (item.condition.length - 1)) {	item.achieved = true };
			}
			if (item.achieved === true) {alert(item.title)};
		} //fim do if
	}); //fim do  foreach e de sua função
} //fim da função


function createAchievements () {
	achievementsList = [ 
	new Achievement (
		2,
		"Girl look how orange you fucking look", 
		"Some healthy sisterly rivalry", 
		"Guess both Coco Montrese and ALyssa Edwards", 
		['coco', 'alyssa edwards']),

	new Achievement (
		1,
		"It came from another planet!", 
		"Mother has INDEED arrived", 
		'Guess "Ornatia"', 
		['Ornatia'])
]
}