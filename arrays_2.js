var correctAnswers = [
	{name: ['Acid Betty', 'acid beth'],
	correctMessage: 'No need to adjust your TV sets... This acid trip is all real...'
	},

	{name: ['Adore Delano', 'Adore'],
	correctMessage:'Party!'},

	{name: ["Akashia", "Akasha"],
	correctMessage: "Serving trip and fall realness."
	},

	{name: ['Alaska Thunderfuck','Alaska 5000', 'Alaska Thunderfukc', 'Alaksa'],
	correctMessage: 'Hieeee!'
	},

	{name: ['Alexis Mateo'],
	correctMessage: "BAM! Right"},

	{name: ['Alisa Summers', 'Alissa Summers', 'Alyssa Summers', 'Alyssa Summers'],
	correctMessage: "Wow, kudos for getting this one"},

	{name: ['Alyssa Edwards', 'Alissa Edwards', 'Alisa Edwards', 'Alysa Edwards'],
	correctMessage: "*pops tongue*"},

	{name: ['Milk'],
	correctMessage: "Right! Oh i miss that pretty face"},

	{name: ['April Carrión', 'April Carrion', 'April Carion', 'April Caryon', 'April ']},

	{name: ['Bebe Zahara Benet', 'bebe zahara', 'Bebe'],
	correctMessage: "CAMAROON!!"},

	{name: ['Ben DeLaCreme', 'bendelacrem', 'ben de la cremme'],
	correctMessage: 'YASS! We originated the language!'},

	{name: ['Bianca Del Rio'],
	correctMessage: "NEED HELP PACKING?"},

	{name: ['Bob The Drag Queen', 'Bob, the drag queen', 'Bob'],
	correctMessage: 'Purse first'},

	{name: ['Carmen Carerra', 'Carmem Carrera', 'Carmen Carera']},

	{name: ['Chad Michaels', 'Chad']},

	{name: ['Chi Chi DeVayne', 'Chi chi'],
	correctMessage: "I don't get ready, I stay ready"},

	{name: ['Coco Montrese', 'Coco'],
	correctMessage: 'Look how orange she fucking looks'},

	{name: ['Courtney Act', 'Courtny Act'],
	correctMessage: "Is this America's next top model"},

	{name: ['Cynthia Lee Fontaine', 'Cynthia lee fontain', 'Cucu'],
	correctMessage: 'HOLA MIS AMORES. Are you ready to see my Cucu.... AGAIN?'},

	{name: ['Darienne Lake', 'Darianne Lake', 'Dariene Lake']},

	{name: ['Dax Exclamationpoint', 'Daxclamation point'],
	correctMessage: 'Do you think my ass looks square?'},

	{name: ['Delta Work']},

	{name: ['Derrick Barry', 'Darrick Barry', 'Derrick Berry', 'Darrick Berry', 'barry'],
	correctMessage: "If I want to do ratchet drag next week, can you give me any tips?"},

	{name: ['Detox'],
	correctMessage: 'Naomi campbelling these hoes to the crown... NEXT'},

	{name: ['DiDa Ritz', 'Dita Ritz']},

	{name: ['Gia Gunn', 'Gia Gun'],
	correctMessage: 'Landed like fresh tilapia'},

	{name: ['Ginger Minj'],
	correctMessage: 'I like to describe myself as a glamour-toad.'},

	{name: ['Honey Mahogany', 'Honey Mahoganny'],
	correctMessage: "Good old double elimination"},

	{name: ['India Ferrah', 'Indiah Farrah', 'India Pharrah', 'India'],
	correctMessage: "Put me down!!"},

	{name: ['Ivy Winters'],
	correctMessage: 'Ivyyyyyyyyy winteeeeeeers'},

	{name: ['Jade Sotomayor', 'Jade'],
	correctMessage: "I bet you didn't know her last name"},

	{name: ['Jade Jolie']},

	{name: ['Jaidynn Diore Fierce', 'Jaydinn Diore Fierce', 'Jaydin Diore Fierce', 'Jaiden Diore Fierce', 'Jayden Diore Fierce'],
	correctMessage: "I just had a vision, I'm a lesbian now!"},

	{name: ['Jasmine Masters'],
	correctMessage: 'And I have one thing to say'},

	{name: ['Jessica Wild']},

	{name: ['Jiggly Caliente', 'Caliente']},

	{name: ['Jinkx Monsoon', 'Monsoon'],
	correctMessage: 'Can I get, can I get an amen?'},

	{name: ['Joslyn Fox', 'Joslin Fox', 'Josslyn Fox'],
	correctMessage: 'Fon fon'},

	{name: ['Jujubee'],
	correctMessage: "I like long walks on the beach, big d*cks, and fried chicken."},

	{name: ['Kandy Ho', 'Kandy Hoe', 'Candy Ho', 'Candy Hoe'],
	correctMessage: "I hope you girls got a sweet tooth, because Kandy's in the motherf*cking house."},

	{name: ['Yekaterina Petrovna Zamolodchikova', 'Katya', 'Zamolodchkova'],
	correctMessage: "But your dad just calls me katya"},

	{name: ['Kelly Mantle']},

	{name: ['Kennedy Davenport'],
	correctMessage:"The struggle is real."},

	{name: ['Kenya Michaels']},

	{name: ['Kim Chi'],
	correctMessage: "I came to DESTROY EVERYONE, with my make-up."},

	{name: ['Laganja Estranja', 'Laganja'],
	correctMessage:"COME ON SEASON 6, TIME TO GET SICKENING"},

	{name: ['Laila McQueen', 'Layla McQueen']},

	{name: ['Lashauwn Beyond', 'Lashawn Beyond', 'Lashaun Beyond', 'Lashaun Beyond'],
	correctMessage: "This is not RuPaul's best friend race!"},

	{name: ['Latrice Royale', 'Latrice Royal'],
	correctMessage: "THE SHADE OF IT ALL"},

	{name: ['Lineysha Sparks', 'Linaysha Sparks', 'Lineisha Sparks']},

	{name: ['Madame LaQueer']},

	{name: ['Magnolia Crawford']},

	{name: ['Manila Luzon']},
];

var guessedAnswers =[]; //array que vai armazenar as respostas que já foram acertadas

/*
var Answers = [
'lashauwnbeyond',
'latriceroyale',
'lineyshasparks',
'madamelaqueer',
'magnoliacrawford',
'manilaluzon',
'mariah',
'max',
'milan',
'milk',
'mimiimfurst',
'missfame',
'monicabeverlyhillz',
'morganmcmichaels',
'mrs.kashadavis',
'mystiquesummersmadison',
'naomismalls',
'nayshalopez',
'nicolepaigebrooks',
'ninaflowers',
'ongina',
'pandoraboxxx',
'pearl',
'pennytration',
'phiphiohara',
'phoenix',
'raja',
'raven',
'rebeccaglasscock',
'robbieturner',
'roxxxyandrews',
'saharadavenport',
'sashabelle',
'serenachacha',
'shangela',
'shannel',
'sharonneedles',
'sonique',
'stacylanematthews',
'tammiebrown',
'tatianna',
'tempestdujour',
'theprincess',
'thorgythor',
'trinityk.bonet',
'trixiemattel',
'tyrasanchez',
'venusd-lite',
'victoriaporkchop',
'violetchachki',
'vivacious',
'viviennepinay',
'willam',
'yarasofia'
]*/