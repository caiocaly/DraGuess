class Achievement {
	constructor (type, title, subtitle, howToGet, condition, source) {
		this._type = type;
		this.title = title;
		this.subtitle = subtitle;
		this.howToGet = howToGet;
		this.condition = this.indexDrags(condition);
		this.achieved = false;
		source ? this.source = "assets/achievements/img_" + source + ".png" : 
		this.source = "assets/achievements/trofeu.png";
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
			if (item.achieved === true) {addAchievement(item)};
		} //fim do if
	}); //fim do  foreach e de sua função
} //fim da função


function createAchievements () {
	achievementsList = [ 
	new Achievement (
		1,
		"Season 1", 
		"Start your engines!", 
		"Guess all season one queens", 
		['bebe zahara benet', 'nina flowers', 'shannel', 'ongina', 
		'jade', 'akashia', 'tammie brown', 'victoria porchop'],
		'season1'),

	new Achievement (
		1,
		"Season 2", 
		"Tyra won fair and square", 
		"Guess all season two queens", 
		['Tyra Sanchez', 'Raven', 'Jujubee', 'Tatianna', 'Pandora Boxx', 'Jessica Wild', 
		'Sahara Davenport', 'Morgan McMichaels', 'Sonique', 'Mystique Summers Madison',
		'Nicole Paige Brooks', 'Shangela'],
		'season2'),

	new Achievement (
		1,
		"Season 3", 
		"Tyra won fair and square", 
		"Guess all season three queens", 
		['Raja', 'Manila Luzon', 'Alexis Mateo', 'Yara Sofia', 'Shangela', 'Carmen Carrera',
		'Delta Work', 'Stacy Lane Matthews', 'Mariah', 'India Ferrah', 'Mimi Imfurst', 'Phoenix', 
		'Venus D-Lite'],
		'season3'),

	new Achievement (
		1,
		"Season 4", 
		" :)", 
		"Guess all season four queens", 
		['Jiggly', 'The Princess', 'Dida Ritz', 'Madame Laqueer', 'Kenya Michaels', 
		'Dida Ritz', 'Willam', 'Jiggly Caliente', 'Milan', 'Madame Laqueer', 'The Princess',
		'Lashauwn Beyond', 'Alisa Summers'],
		'season4'),

	new Achievement (
		1,
		"Season 5", 
		" :)", 
		"Guess all season five queens", 
		['Jinkx', 'Alaska', 'Roxxxy', 'Detox', 'Coco Montrese', 'ALyssa Edwards',
		'Ivy Winters', 'Jade Jolie', 'Lineysha Sparx', 'Honey Mahoganny', 'Vivianne Pinay',
		'Monica Beverly Hillz', 'Serena Chacha', 'Penny Tration'],
		'season5'),

	new Achievement (
		1,
		"Season 6", 
		" :)", 
		"Guess all season six queens", 
		['Bianca', 'Adore', 'Courtney', 'Darienne', 'Ben DeLaCreme', 'Joslyn Fox',
		'Trinity K. Bonet', 'Laganja', 'Milk', 'Gia', 'April Carrion', 'Vivacious', 
		'Magnolia', 'Kelly Mantle'],
		'season6'),

	new Achievement (
		1,
		"Season 7", 
		" :)", 
		"Guess all season seven queens", 
		['Violet Chachki', 'Ginger Minj', 'Pearl', 'Kennedy Davenport',
		'Katya', 'Trixie Mattel', 'Miss Fame', 'Jaidynn Diore Fierce',
		'Max Max', 'Kandy Ho', 'Mrs. Kasha Davis', 'Jasmine Masters',
		'Sasha Belle', 'Tempest DuJour'],
		'season7'),

	new Achievement (
		1,
		"Season 8", 
		" :)", 
		"Guess all season four queens", 
		['Bob', 'Kim Chi', 'Naomi Smalls', 'Chi Chi DeVayne',
		'Derrick Barry', 'Thorgy Thor', 'Robbie Turner',
		'Acid Betty', 'Naysha Lopez', 'Cynthia Lee Fontaine',
		'Dax ExclamationPoint','Laila McQueen'],
		'season8'),


	new Achievement (
		1,
		"Season 9", 
		" :)", 
		"Guess all season four queens", 
		['Sasha Velour', 'Peppermint', 'Shea Couleé', 'Trinity Taylor', 
		'Alexis Michelle', "Nina Bo'nina Brown", 'Valentina',
		'Farrah Moan', 'Aja', 'Cynthia Lee Fontaine', 'Eureka',
		'Charlie Hides', 'Kimora Blac', 'Jaymes Mansfield']	,
		'season9'),


	//// TYPE 2
	new Achievement (
		2,
		"Shipping Queen",
		"Jinkx + Ivy = RPDR OTP",
		"Guess Ivy and Jinkx in succession",
		['Jinkx', 'Ivy winters']),

	new Achievement (
		1,
		"WOW! You got an achievement!",
		"Yeah, just like that. The game is mine and I do what i want",
		"Chute 'raja'",
		['Raja'])
]
}

function addAchievement (achievement) {
	document.getElementById('achievements').innerHTML +=
	`<div class="achievementBlock">
		<div class="achievementImage">
			<img src="${achievement.source}">
		</div>
		<div class="achievementContent">
			<p class="achievementTitle">${achievement.title}</p>
			<p class="achievementDescription"> ${achievement.subtitle} </p>
		</div>
	</div>`
}
