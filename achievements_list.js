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
			if (item.achieved === false) {
				for (i = 0; i < item.condition.length; i++ ) {
					if (listOfGuessedIndexes.indexOf(item.condition[i]) === -1){
						break;
					} else if (i === (item.condition.length - 1)) {
						item.achieved = true;
					}
				}

				if (item.achieved === true) {alert('Achievement unlocked!')};
				break;
			}//fim do if do case 1

			case 2:

		} //fim do switch todo
	} //fim da função contida no foreach
); //fim do  foreach 
} //fim da função


function createAchievements () {
	achievementsList = [ 
	new Achievement (
		1,
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