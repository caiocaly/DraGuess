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
				let snack;
				item.title[language].length > 1 ? snack = item.title[language] : snack = item.title;
				addAchievement(item)
				snackbar(snack)};
		} //fim do if
	}); //fim do  foreach e de sua função
} //fim da função

function addAchievement (achievement) {
	let Title, Sub;
	achievement.title[language].length > 1 ? Title = achievement.title[language] : Title = achievement.title;
	achievement.subtitle[language].length > 1 ? Sub = achievement.subtitle[language] : Sub = achievement.subtitle;
	document.getElementById('achievements').innerHTML +=
	`<div class="achievementBlock">
		<div class="achievementImage">
			<img src="${achievement.source}">
		</div>
		<div class="achievementContent">
			<p class="achievementTitle">${Title}</p>
			<p class="achievementDescription"> ${Sub} </p>
		</div>
	</div>`
}


function createAchievements () {
	achievementsList = [ 
	new Achievement (
		1,
		["Everything looks good in low-res",
		"Tudo fica melhor em baixa resolução"], 
		["Guess all season 1 queens", 
		"Acerte todas as queens da primeira temporada"],
		['bebe zahara benet', 'nina flowers', 'shannel', 'ongina', 
		'jade', 'akashia', 'tammie brown', 'victoria porchop'],
		'season1'),

	new Achievement (
		1,
		["Raven was robbed (was she really, though?)",
		"Raven rainha, Tyra nadinha (será mesmo?)"], 
		["Guess all season 2 queens",
		"Acerte todas as queens da segunda temporada"], 
		['Tyra Sanchez', 'Raven', 'Jujubee', 'Tatianna', 'Pandora Boxx', 'Jessica Wild', 
		'Sahara Davenport', 'Morgan McMichaels', 'Sonique', 'Mystique Summers Madison',
		'Nicole Paige Brooks', 'Shangela'],
		'season2'),

	new Achievement (
		1,
		"Heathers vs. Boogers", 
		["Guess all season 3 queens",
		"Acerte todas as queens da terceira temporada"], 
		['Raja', 'Manila Luzon', 'Alexis Mateo', 'Yara Sofia', 'Shangela', 'Carmen Carrera',
		'Delta Work', 'Stacy Lane Matthews', 'Mariah', 'India Ferrah', 'Mimi Imfurst', 'Phoenix', 
		'Venus D-Lite'],
		'season3'),

	new Achievement (
		1,
		["What did Willam do?",
		"Que que a Willam fez?"], 
		["Guess all season 4 queens",
		"Acerte todas as queens da quarta temporada"], 
		['Jiggly', 'The Princess', 'Dida Ritz', 'Madame Laqueer', 'Kenya Michaels', 
		'Dida Ritz', 'Willam', 'Jiggly Caliente', 'Milan', 'Madame Laqueer', 'The Princess',
		'Lashauwn Beyond', 'Alisa Summers'],
		'season4'),

	new Achievement (
		1,
		["Smells like trout",
		"Parece umas barbiezinha"], 
		["Guess all season 5 queens",
		"Acerte todas as queens da quinta temporada"], 
		['Jinkx', 'Alaska', 'Roxxxy', 'Detox', 'Coco Montrese', 'ALyssa Edwards',
		'Ivy Winters', 'Jade Jolie', 'Lineysha Sparx', 'Honey Mahoganny', 'Vivianne Pinay',
		'Monica Beverly Hillz', 'Serena Chacha', 'Penny Tration'],
		'season5'),

	new Achievement (
		1,
		["Bianca and some other hos",
		"Bianca e as otra"],  
		["Guess all season 6 queens",
		"Acerte todas as queens da sexta temporada"], 
		['Bianca', 'Adore', 'Courtney', 'Darienne', 'Ben DeLaCreme', 'Joslyn Fox',
		'Trinity K. Bonet', 'Laganja', 'Milk', 'Gia', 'April Carrion', 'Vivacious', 
		'Magnolia', 'Kelly Mantle'],
		'season6'),

	new Achievement (
		1,
		"I DON'T WANNA HEAR ANY GODDAMN EXCUSES...ANYMORE!", 
		["Guess all season 7 queens",
		"Acerte todas as queens da sétima temporada"], 
		['Violet Chachki', 'Ginger Minj', 'Pearl', 'Kennedy Davenport',
		'Katya', 'Trixie Mattel', 'Miss Fame', 'Jaidynn Diore Fierce',
		'Max Max', 'Kandy Ho', 'Mrs. Kasha Davis', 'Jasmine Masters',
		'Sasha Belle', 'Tempest DuJour'],
		'season7'),

	new Achievement (
		1,
		"Did somebody mention ART?", 
		["Guess all season 8 queens",
		"Acerte todas as queens da oitava temporada"], 
		['Bob', 'Kim Chi', 'Naomi Smalls', 'Chi Chi DeVayne',
		'Derrick Barry', 'Thorgy Thor', 'Robbie Turner',
		'Acid Betty', 'Naysha Lopez', 'Cynthia Lee Fontaine',
		'Dax ExclamationPoint','Laila McQueen'],
		'season8'),


	new Achievement (
		1,
		"Murder on the lipsync floor", 
		["Guess all season 9 queens",
		"Acerte todas as queens da nona temporada"], 
		['Sasha Velour', 'Peppermint', 'Shea Couleé', 'Trinity Taylor', 
		'Alexis Michelle', "Nina Bo'nina Brown", 'Valentina',
		'Farrah Moan', 'Aja', 'Cynthia Lee Fontaine', 'Eureka',
		'Charlie Hides', 'Kimora Blac', 'Jaymes Mansfield']	,
		'season9'),

	new Achievement (
		1,
		["Raven was robbed pt. 2 (this time for real, though)",
		"Raven rainha, Chad nadinha"],
		["Guess all queens from All Stars 1",
		"Acerte todas as queens que participaram do All Stars 1"],
		['Pandora Boxxx', 'Jujubee', 'Shannel', 'Chad Michaels',
		'Raven', 'Alexis Mateo', 'Yara Sofia', 'Latrice Royale',
		'Manila Luzon', 'Nina Flowers', 'Tammie Brown', 'Mimi Imfurst'],
		'allstars1'
		),

	new Achievement (
		1,
		["Rolaskatox strikes again",
		"Rolaskatox ataca novamente (deus me dibre)"],
		["Guess all queens from All Stars 2",
		"Acerte todas as queens que participaram do All Stars 2"],
		["Alaska", "Detox", "Katya", "Roxxxy Andrews", "Alyssa Edwards", 
		"Tatianna", "Phi Phi O'Hara", "Ginger Minj", "Adore Delano", 
		"Coco Montrese"],
		'allstars2'
		),	



	//// TYPE 2
	new Achievement (
		2,
		["I am nacho'r friend",
		"Competição amigável"],
		["Guess Alyssa and Coco in succession",
		"Acerte o nome da Alyssa e Coco em sequência"],
		['Alyssa Edwards', 'Coco Montrese'],
		"nacho"
		),

	new Achievement (
		2,
		["RPDR OTP",
		"TO ATRAPALHANDO O CASALZINHO?"],
		["Guess Ivy and Jinkx in succession",
		"Acerte o nome da Ivy e da Jinkx em sequência"],
		['Jinkx', 'Ivy winters']),

	new Achievement (
		2,
		"Rolaskatox",
		["Guess Roxxxy, Alaska and Detox in sucession",
		"Acerte o nome das três bandidas em sequência"],
		['Roxxxy', 'Alaska', 'Detox']),

	new Achievement (
		1,
		"C U N T",
		["Guess all winners from the show",
		"Acerte todas as winners"],
		['Bebe', 'Tyra', 'Raja', 'Sharon', 'Jinkx',
		'Bianca', 'Violet', 'Bob', 'Chad', 'Sasha Velour', 'Alaska']
		),

	new Achievement (
		1,
		["Gone but (not) remembered",
		"O importante é participar"],
		["Guess all queens who went were sent home first (doesn't count all stars)",
		"Acerte o nome de todas as primeiras eliminadas (all stars não conta"],
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
		["And who the fuck are you?",
		"QUANTOS ANOS DE CARREIRA, MEU BEM?"],
		["Guess the 3 most obscure and forgotten queens.",
		"Acerte o nome das 3 queens mais obscuras e esquecíveis #allTnoShade"],
		['Penny Tration', 'Venus D-Lite', 'Alisa Summers']),

	new Achievement (
		1,
		["I will NOT survive",
		"Punheta, sai suas capeta!"],
		["Guess all the queens who took part in a shameful in double eliminations",
		"Acerte o nome de todas as queens que participaram de 'double eliminations'"],
		['Dax', 'Honey Mahoganny', 'Vivianne Pinay', 'Laila McQueen']),

	new Achievement (
		1,
		["Shantay YOU ALL STAY",
		"Siririca, seis tudo fica!"],
		['Guess all queens that impressed Ru in a lip sync and made him not eliminate anyone',
		'Acerte o nome de todas queens que impressionaram a Ru no lipsync e fizeram ela mudar as regras'],
		['Alyssa Edwards', 'Tatianna', 'Roxxxy', 'Sasha Velour', 'Trinity Taylor', 'Peppermint', 'Shea'])
]
}

