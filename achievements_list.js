class Achievement {
	constructor (type, title, subtitle, condition, source) {
		type === 1 || type === 2 ? this.type = type : console.log(title + "'s type is not valid");
		this.title = title;
		this.subtitle = subtitle;
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
				} else if (i === (item.condition.length - 1)) {	
					item.achieved = true };
			}
			if (item.achieved === true) {
				addAchievement(item)
				snackbar(item.title)};
		} //fim do if
	}); //fim do  foreach e de sua função
} //fim da função

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


function createAchievements () {
	achievementsList = [ 
	new Achievement (
		1,
		"Everything looks good in low-res", 
		"Guess all season 1 queens", 
		['bebe zahara benet', 'nina flowers', 'shannel', 'ongina', 
		'jade', 'akashia', 'tammie brown', 'victoria porchop'],
		'season1'),

	new Achievement (
		1,
		"Raven was robbed (was she really, though?)", 
		"Guess all season 2 queens", 
		['Tyra Sanchez', 'Raven', 'Jujubee', 'Tatianna', 'Pandora Boxx', 'Jessica Wild', 
		'Sahara Davenport', 'Morgan McMichaels', 'Sonique', 'Mystique Summers Madison',
		'Nicole Paige Brooks', 'Shangela'],
		'season2'),

	new Achievement (
		1,
		"Heathers vs. Boogers", 
		"Guess all season 3 queens", 
		['Raja', 'Manila Luzon', 'Alexis Mateo', 'Yara Sofia', 'Shangela', 'Carmen Carrera',
		'Delta Work', 'Stacy Lane Matthews', 'Mariah', 'India Ferrah', 'Mimi Imfurst', 'Phoenix', 
		'Venus D-Lite'],
		'season3'),

	new Achievement (
		1,
		"What did Willam do?", 
		"Guess all season 4 queens", 
		['Jiggly', 'The Princess', 'Dida Ritz', 'Madame Laqueer', 'Kenya Michaels', 
		'Dida Ritz', 'Willam', 'Jiggly Caliente', 'Milan', 'Madame Laqueer', 'The Princess',
		'Lashauwn Beyond', 'Alisa Summers'],
		'season4'),

	new Achievement (
		1,
		"Smells like trout", 
		"Guess all season 5 queens", 
		['Jinkx', 'Alaska', 'Roxxxy', 'Detox', 'Coco Montrese', 'ALyssa Edwards',
		'Ivy Winters', 'Jade Jolie', 'Lineysha Sparx', 'Honey Mahoganny', 'Vivianne Pinay',
		'Monica Beverly Hillz', 'Serena Chacha', 'Penny Tration'],
		'season5'),

	new Achievement (
		1,
		"Bianca and some other hos",  
		"Guess all season 6 queens", 
		['Bianca', 'Adore', 'Courtney', 'Darienne', 'Ben DeLaCreme', 'Joslyn Fox',
		'Trinity K. Bonet', 'Laganja', 'Milk', 'Gia', 'April Carrion', 'Vivacious', 
		'Magnolia', 'Kelly Mantle'],
		'season6'),

	new Achievement (
		1,
		"I DON'T WANNA HEAR ANY GODDAMN EXCUSES...ANYMORE!", 
		"Guess all season 7 queens", 
		['Violet Chachki', 'Ginger Minj', 'Pearl', 'Kennedy Davenport',
		'Katya', 'Trixie Mattel', 'Miss Fame', 'Jaidynn Diore Fierce',
		'Max Max', 'Kandy Ho', 'Mrs. Kasha Davis', 'Jasmine Masters',
		'Sasha Belle', 'Tempest DuJour'],
		'season7'),

	new Achievement (
		1,
		"Did somebody mention ART?", 
		"Guess all season 8 queens", 
		['Bob', 'Kim Chi', 'Naomi Smalls', 'Chi Chi DeVayne',
		'Derrick Barry', 'Thorgy Thor', 'Robbie Turner',
		'Acid Betty', 'Naysha Lopez', 'Cynthia Lee Fontaine',
		'Dax ExclamationPoint','Laila McQueen'],
		'season8'),


	new Achievement (
		1,
		"Murder on the lipsync floor", 
		"Guess all season 9 queens", 
		['Sasha Velour', 'Peppermint', 'Shea Couleé', 'Trinity Taylor', 
		'Alexis Michelle', "Nina Bo'nina Brown", 'Valentina',
		'Farrah Moan', 'Aja', 'Cynthia Lee Fontaine', 'Eureka',
		'Charlie Hides', 'Kimora Blac', 'Jaymes Mansfield']	,
		'season9'),

	new Achievement (
		1,
		"Raven was robbed pt. 2 (this time for real, though)",
		"Guess all queens from All Stars 1",
		['Pandora Boxxx', 'Jujubee', 'Shannel', 'Chad Michaels',
		'Raven', 'Alexis Mateo', 'Yara Sofia', 'Latrice Royale',
		'Manila Luzon', 'Nina Flowers', 'Tammie Brown', 'Mimi Imfurst'],
		'allstars1'
		),

	new Achievement (
		1,
		"Rolaskatox strikes again",
		"Guess all queens from All Stars 2",
		["Alaska", "Detox", "Katya", "Roxxxy Andrews", "Alyssa Edwards", 
		"Tatianna", "Phi Phi O'Hara", "Ginger Minj", "Adore Delano", 
		"Coco Montrese"],
		'allstars2'
		),	



	//// TYPE 2
	new Achievement (
		2,
		"Facecrack of the century",
		"Guess Alyssa and Coco in succession",
		['Alyssa Edwards', 'Coco Montrese'],
		"nacho"
		),

	new Achievement (
		2,
		"RPDR OTP",
		"Guess Ivy and Jinkx in succession",
		['Jinkx', 'Ivy winters']),

	new Achievement (
		2,
		"Rolaskatox",
		"Guess Roxxxy, Alaska and Detox in sucession",
		['Roxxxy', 'Alaska', 'Detox']),


	new Achievement (
		1,
		"WOW! You got an achievement!",
		"Yeah, just like that. The game is mine and I do what i want",
		['Raja']),

	new Achievement (
		1,
		"C U N T",
		"Guess all winners from the show",
		['Bebe', 'Tyra', 'Raja', 'Sharon', 'Jinkx',
		'Bianca', 'Violet', 'Bob', 'Chad', 'Sasha Velour', 'Alaska']
		),

	new Achievement (
		1,
		"Gone but (not) remembered",
		"Guess all queens who went were sent home first (doesn't count all stars)",
		['Victoria Porkchop', 'Nicole Paige Brooks', 'Venus Dlite', 'Alisa Summers',
		'Penny Tration', 'Magnolia Crawford', 'Kelly Mantle', 'Tempest DuJour', 
		'Naysha Lopez', 'Jaymes Mansfield']
		),

	new Achievement (
		1,
		"You're a champion, greatest of them all",
		"Guess all queens",
		[]
		),

	new Achievement (
		1,
		"QUANTOS ANOS DE CARREIRA, MEU BEM?",
		"Guess Alisa Summers, Venus D-lite and Penny Tration.",
		['Penny Tration', 'Venus D-Lite', 'Alisa Summers'])
]
}

