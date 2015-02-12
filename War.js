var twoh = 2.0;
var twos = 2.1;
var twoc = 2.2;
var twod = 2.3;
var threeh = 3.0;
var threes = 3.1;
var threec = 3.2;
var threed = 3.3;
var fourh = 4.0;
var fours = 4.1;
var fourc = 4.2;
var fourd = 4.3;
var fived = 5.0;
var fivec = 5.1;
var fives = 5.2;
var fiveh = 5.3;
var sixd = 6.0;
var sixc = 6.1;
var sixs = 6.2;
var sixh = 6.3;
var sevend = 7.0;
var sevenc = 7.1;
var sevens = 7.2;
var sevenh = 7.3;
var eights = 8.0;
var eightd = 8.1;
var eightc = 8.2;
var eighth = 8.3;
var nined = 9.0;
var ninec = 9.1;
var nines = 9.2;
var nineh = 9.3;
var tenc = 10.0;
var tens = 10.1;
var tend = 10.2;
var tenh = 10.3;
var Jc = 11.0;
var Jd = 11.1;
var Js = 11.2;
var Jh = 11.3;
var Qd = 12.0;
var Qc = 12.1;
var Qs = 12.2;
var Qh = 12.3;
var Kh = 13.0;
var Kc = 13.1;
var Kd = 13.2;
var Ks = 13.3;
var Ad = 14.0;
var As = 14.1;
var Ac = 14.2;
var Ah = 14.3;
var deck =  [Ac, Ad, Ah, As, twoh, twos, twoc, twod, threeh, threes, threec, threed, fourh, fours, fourc, fours, fived, fivec, fives, fiveh, sixd, sixc, sixs, sixh, sevend, sevenc, sevens, sevenh, eights, eightd, eightc, eighth, nined, ninec, nines, nineh, tenc, tens, tend, tenh, Jc, Jd, Jh, Js, Qs, Qd, Qh, Qc, Kh, Kc, Ks, Kd];
console.log(deck.length);
var number = ["screwDat", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "J", "Q", "K", "A"];
var suit = ["c", "d", "s", "h"];
var i = 0;

var firstRun = true;
var computerDeck;
var userDeck;

var shuffle = function(){
	var currentIndex = deck.length;
	var temporaryValue;
	var randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = deck[currentIndex];
		deck[currentIndex] = deck[randomIndex];
		deck[randomIndex] = temporaryValue;
	}
}

var draw = function(){
	if (!firstRun){

		document.getElementById("computerCard").className = "cardDiv " + number[Math.floor(computerDeck[i])] + suit[0];
		document.getElementById("userCard").className = "cardDiv " + number[Math.floor(userDeck[i])] + suit[0];

		if (Math.floor(computerDeck[i]) > Math.floor(userDeck[i]) || ((Math.floor(computerDeck[i]) == 2) && (Math.floor(userDeck[i]) == 14))){
			console.log("lose");
			document.getElementById("whole").style.backgroundColor = "red";
			document.getElementById("lose").style.display = "block";
			document.getElementById("win").style.display = "none";
			document.getElementById("tie").style.display = "none";
			document.getElementById("default").style.display = "none";
			computerDeck.push(userDeck[i]);
			userDeck.shift();
			document.getElementById("ComNumber").innerHTML = computerDeck.length;
			document.getElementById("UserNumber").innerHTML = userDeck.length;
			console.log("userDeck After:\nLength is: " + userDeck.length + "\nContents: " + userDeck);
			console.log("computerDeck After:\nLength is: " + computerDeck.length + "\nContents: " + computerDeck);
			if (i == 26){
				firstRun = false;
			}
			else {
				firstRun = true;
			}
		}
		else if (Math.floor(computerDeck[i]) < Math.floor(userDeck[i]) || ((Math.floor(computerDeck[i]) == 14) && (Math.floor(userDeck[i]) == 2))){
			console.log("win");
			document.getElementById("whole").style.backgroundColor = "green";
			document.getElementById("win").style.display = "block";
			document.getElementById("lose").style.display = "none";
			document.getElementById("tie").style.display = "none";
			document.getElementById("default").style.display = "none";
			userDeck.push(computerDeck[i]);
			computerDeck.shift();
			console.log("userDeck After:\nLength is: " + userDeck.length + "\nContents: " + userDeck);
			console.log("computerDeck After:\nLength is: " + computerDeck.length + "\nContents: " + computerDeck);
			document.getElementById("ComNumber").innerHTML = computerDeck.length;
			document.getElementById("UserNumber").innerHTML = userDeck.length;
			firstRun = false;
		}
		else if (Math.floor(computerDeck[i]) == Math.floor(userDeck[i])){
			console.log("tie");
			document.getElementById("whole").style.backgroundColor = "black";
			document.getElementById("tie").style.display = "block";
			document.getElementById("win").style.display = "none";
			document.getElementById("lose").style.display = "none";
			document.getElementById("default").style.display = "none";
			console.log("userDeck After:\nLength is: " + userDeck.length + "\nContents: " + userDeck);
			console.log("computerDeck After:\nLength is: " + computerDeck.length + "\nContents: " + computerDeck);
			document.getElementById("ComNumber").innerHTML = computerDeck.length;
			document.getElementById("UserNumber").innerHTML = userDeck.length;
			firstRun = false;
		}
	}
	else {
		shuffle(deck);
		userDeck = deck.slice(0, 26);
		console.log("userDeck Before:\nLength is: " + userDeck.length + "\nContents: " + userDeck);
		console.log(userDeck[i]);
		computerDeck = deck.slice(26, 53);
		console.log("computerDeck Before:\nLength is: " + computerDeck.length + "\nContents: " + computerDeck);
		console.log(computerDeck[i]);
		firstRun = false;
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
	firstRun = true;
}

