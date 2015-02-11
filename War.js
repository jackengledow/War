var twoh = 2;
var twos = 2;
var twoc = 2;
var twod = 2;
var threeh = 3;
var threes = 3;
var threec = 3;
var threed = 3;
var fourh = 4;
var fours = 4;
var fourc = 4;
var fours = 4;
var fived = 5;
var fivec = 5;
var fives = 5;
var fiveh = 5;
var sixd = 6;
var sixc = 6;
var sixs = 6;
var sixh = 6;
var sevend = 7;
var sevenc = 7;
var sevens = 7;
var sevenh = 7;
var eights = 8;
var eightd = 8;
var eightc = 8;
var eighth = 8;
var nined = 9;
var ninec = 9;
var nines = 9;
var nineh = 9;
var tenc = 10;
var tens = 10;
var tend = 10;
var tenh = 10;
var Jc = 11;
var Jd = 11;
var Js = 11;
var Jh = 11;
var Qd = 12;
var Qc = 12;
var Qs = 12;
var Qh = 12;
var Kh = 13;
var Kc = 13;
var Kd = 13;
var Ks = 13;
var Ad = 14;
var As = 14;
var Ac = 14;
var Ah = 14;
var deck =  [Ac, Ad, Ah, As, twoh, twos, twoc, twod, threeh, threes, threec, threed, fourh, fours, fourc, fours, fived, fivec, fives, fiveh, sixd, sixc, sixs, sixh, sevend, sevenc ,sevens, sevenh, eights, eightd, eightc, eighth, nined, ninec, nines, nineh, tenc, tens, tend, tenh, Jc, Jd, Jh, Js, Qs, Qd, Qh, Qc, Kh, Kc, Ks, Kd];
var i = 0;

var shuffle = function(){
	var currentIndex = deck.length, temporaryValue, randomIndex ;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = deck[currentIndex];
		deck[currentIndex] = deck[randomIndex];
		deck[randomIndex] = temporaryValue;
	}
	var userDeck = deck.slice(0, 26);
	var computerDeck = deck.slice(26, 53);
}
shuffle(deck);

var draw = function(){
	var userDeck = deck.slice(0, 26);
	console.log(userDeck);
	console.log(userDeck[i]);
	var computerDeck = deck.slice(26, 53);
	console.log(computerDeck);
	console.log(computerDeck[i]);
	if (computerDeck[i] > userDeck[i]){
		console.log("lose");
	}
	else if (computerDeck[i] < userDeck[i]){
		console.log("win");
	}
	else if (computerDeck[i] = userDeck[i]){
		console.log("tie");
	}
	i++;
}




//Alec is working :>

var restart = function() {
	shuffle(deck);
	document.getElementById("default").style.display = "block";
	document.getElementById("win").style.display = "none";
	document.getElementById("lose").style.display = "none";
	document.getElementById("tie").style.display = "none";
	document.getElementById("whole").style.backgroundColor = "#000066";
	i = 0;
}

