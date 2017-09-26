class Achievement {
	constructor (type, title, subtitle, condition) {
		this.type = type;
		this.title = title;
		this.subtitle = subtitle;
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
		
	});
}



function createAchievements () {
	achievementsList = [ 
	new Achievement ("all", "JIMI JIMI AJA", "Só drags que contém 'aja' no nome kkkk", ['acid betty', 'adore']),
]
}