var twoh = 2.1;
var twos = 2.2;
var twoc = 2.3;
var twod = 2.4;
var threeh = 3.1;
var threes = 3.2;
var threec = 3.3;
var threed = 3.4;
var fourh = 4.1;
var fours = 4.2;
var fourc = 4.3;
var fourd = 4.4;
var fived = 5.1;
var fivec = 5.2;
var fives = 5.3;
var fiveh = 5.4;
var sixd = 6.1;
var sixc = 6.2;
var sixs = 6.3;
var sixh = 6.4;
var sevend = 7.1;
var sevenc = 7.2;
var sevens = 7.3;
var sevenh = 7.4;
var eights = 8.1;
var eightd = 8.2;
var eightc = 8.3;
var eighth = 8.4;
var nined = 9.1;
var ninec = 9.2;
var nines = 9.3;
var nineh = 9.4;
var tenc = 10.1;
var tens = 10.2;
var tend = 10.3;
var tenh = 10.4;
var Jc = 11.1;
var Jd = 11.2;
var Js = 11.3;
var Jh = 11.4;
var Qd = 12.1;
var Qc = 12.2;
var Qs = 12.3;
var Qh = 12.4;
var Kh = 13.1;
var Kc = 13.2;
var Kd = 13.3;
var Ks = 13.4;
var Ad = 14.1;
var As = 14.2;
var Ac = 14.3;
var Ah = 14.4;
var deck =  [Ac, Ad, Ah, As, twoh, twos, twoc, twod, threeh, threes, threec, threed, fourh, fours, fourc, fours, fived, fivec, fives, fiveh, sixd, sixc, sixs, sixh, sevend, sevenc, sevens, sevenh, eights, eightd, eightc, eighth, nined, ninec, nines, nineh, tenc, tens, tend, tenh, Jc, Jd, Jh, Js, Qs, Qd, Qh, Qc, Kh, Kc, Ks, Kd];
console.log(deck.length);
var number = ["screwDat", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "J", "Q", "K", "A"];
var suit = ["screwDat", "c", "d", "s", "h"];

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
		
		var computerSuit = parseInt(("" + computerDeck).charAt(("" + computerDeck).length-1));
		var userSuit = parseInt(("" + userDeck).charAt(("" + userDeck).length-1));
		
		console.log("comp suit = " + computerSuit);

		document.getElementById("computerCard").className = "cardDiv " + number[Math.floor(computerDeck[0])] + suit[computerSuit];
		document.getElementById("userCard").className = "cardDiv " + number[Math.floor(userDeck[0])] + suit[userSuit];

		if (Math.floor(computerDeck[0]) > Math.floor(userDeck[0]) || ((Math.floor(computerDeck[0]) == 2) && (Math.floor(userDeck[0]) == 14))){
			console.log("lose");
			document.getElementById("whole").style.backgroundColor = "red";
			document.getElementById("lose").style.display = "block";
			document.getElementById("win").style.display = "none";
			document.getElementById("tie").style.display = "none";
			document.getElementById("default").style.display = "none";
			computerDeck.push(userDeck[0]);
			userDeck.shift();
			var temp = computerDeck[0];
			for (var i = 0; i < computerDeck.length - 1; i++){
				computerDeck[i] = computerDeck[i+1];
			}
			computerDeck[computerDeck.length - 1] = temp;
			console.log("userDeck After:\nLength is: " + userDeck.length + "\nContents: " + userDeck);
			console.log("computerDeck After:\nLength is: " + computerDeck.length + "\nContents: " + computerDeck);
			document.getElementById("ComNumber").innerHTML = computerDeck.length;
			document.getElementById("UserNumber").innerHTML = userDeck.length;
		}
		else if (Math.floor(computerDeck[0]) < Math.floor(userDeck[0]) || ((Math.floor(computerDeck[0]) == 14) && (Math.floor(userDeck[0]) == 2))){
			console.log("win");
			document.getElementById("whole").style.backgroundColor = "green";
			document.getElementById("win").style.display = "block";
			document.getElementById("lose").style.display = "none";
			document.getElementById("tie").style.display = "none";
			document.getElementById("default").style.display = "none";
			userDeck.push(computerDeck[0]);
			computerDeck.shift();
			var temp = userDeck[0];
			for (var i = 0; i < userDeck.length - 1; i++){
				userDeck[i] = userDeck[i+1];
			}
			userDeck[userDeck.length - 1] = temp;
			console.log("userDeck After:\nLength is: " + userDeck.length + "\nContents: " + userDeck);
			console.log("computerDeck After:\nLength is: " + computerDeck.length + "\nContents: " + computerDeck);
			document.getElementById("ComNumber").innerHTML = computerDeck.length;
			document.getElementById("UserNumber").innerHTML = userDeck.length;
		}
		else if (Math.floor(computerDeck[0]) == Math.floor(userDeck[0])){
			console.log("tie");
			document.getElementById("whole").style.backgroundColor = "black";
			document.getElementById("tie").style.display = "block";
			document.getElementById("win").style.display = "none";
			document.getElementById("lose").style.display = "none";
			document.getElementById("default").style.display = "none";
			var temp = computerDeck[0];
			for (var i = 0; i < computerDeck.length - 1; i++){
				computerDeck[i] = computerDeck[i+1];
			}
			computerDeck[computerDeck.length - 1] = temp;
			temp = userDeck[0];
			for (var i = 0; i < userDeck.length - 1; i++){
				userDeck[i] = userDeck[i+1];
			}
			userDeck[userDeck.length - 1] = temp;
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
		console.log(userDeck[0]);
		computerDeck = deck.slice(26, 53);
		console.log("computerDeck Before:\nLength is: " + computerDeck.length + "\nContents: " + computerDeck);
		console.log(computerDeck[0]);
		firstRun = false;
	}
}




//Alec is working :>

var restart = function() {
	shuffle(deck);
	document.getElementById("default").style.display = "block";
	document.getElementById("win").style.display = "none";
	document.getElementById("lose").style.display = "none";
	document.getElementById("tie").style.display = "none";
	document.getElementById("whole").style.backgroundColor = "#000066";
	document.getElementById("UserNumber").innerHTML =26;
	document.getElementById("ComNumber").innerHTML = 26;
	firstRun = true;
}

