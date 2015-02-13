var twod = 2.1;
var twoh = 2.2;
var twos = 2.3;
var twoc = 2.4;
var threed = 3.1;
var threeh = 3.2;
var threes = 3.3;
var threec = 3.4;
var fourd = 4.1;
var fourh = 4.2;
var fours = 4.3;
var fourc = 4.4;
var fived = 5.1;
var fiveh = 5.2;
var fives = 5.3;
var fivec = 5.4;
var sixd = 6.1;
var sixh = 6.2;
var sixs = 6.3;
var sixc = 6.4;
var sevend = 7.1;
var sevenh = 7.2;
var sevens = 7.3;
var sevenc = 7.4;
var eightd = 8.1;
var eighth = 8.2;
var eights = 8.3;
var eightc = 8.4;
var nined = 9.1;
var nineh = 9.2;
var nines = 9.3;
var ninec = 9.4;
var tend = 10.1;
var tenh = 10.2;
var tens = 10.3;
var tenc = 10.4;
var Jd = 11.1;
var Jh = 11.2;
var Js = 11.3;
var Jc = 11.4;
var Qd = 12.1;
var Qh = 12.2;
var Qs = 12.3;
var Qc = 12.4;
var Kd = 13.1;
var Kh = 13.2;
var Ks = 13.3;
var Kc = 13.4;
var Ad = 14.1;
var Ah = 14.2;
var As = 14.3;
var Ac = 14.4;
var deck =  [Ac, Ad, Ah, As, twoc, twoh, twod, twos, threeh, threes, threec, threed, fourh, fours, fourc, fours, fived, fivec, fives, fiveh, sixd, sixc, sixs, sixh, sevend, sevenc, sevens, sevenh, eights, eightd, eightc, eighth, nined, ninec, nines, nineh, tenc, tens, tend, tenh, Jc, Jd, Jh, Js, Qs, Qd, Qh, Qc, Kh, Kc, Ks, Kd];
console.log(deck.length);
var number = ["screwDat", "placeHolder", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "J", "Q", "K", "A"];
var suit = ["screwDat", "c", "d", "s", "h"];

var firstRun = true;
var computerDeck;
var userDeck;
var temp;

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

var winLose = function(){
	if (userDeck.length == 52 && !firstRun) {
		document.getElementById("whole").style.backgroundColor = "green";
		document.getElementById("bodyDefault").style.display = "none";
		document.getElementById("bodyWin").style.display = "block";
	}
 	if (computerDeck.length == 52 && !firstRun) {
		document.getElementById("whole").style.backgroundColor = "red";
		document.getElementById("bodyDefault").style.display = "none";
		document.getElementById("bodyLose").style.display = "block";
	}
}

var draw = function(){
	if (!firstRun){
		
		var computerSuit = parseInt(("" + computerDeck).charAt(("" + computerDeck).length-1));
		var userSuit = parseInt(("" + userDeck).charAt(("" + userDeck).length-1));
		
		console.log("comp suit = " + computerSuit + " which is " + suit[computerSuit]);
		console.log("user suit = " + userSuit + " which is " + suit[userSuit]);

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
	winLose();
	console.log(userDeck[0]);
	console.log(computerDeck[0]);
}
draw();





var restart = function() {
	shuffle(deck);
	document.getElementById("default").style.display = "block";
	document.getElementById("win").style.display = "none";
	document.getElementById("lose").style.display = "none";
	document.getElementById("tie").style.display = "none";
	document.getElementById("whole").style.backgroundColor = "#000066";
	document.getElementById("UserNumber").innerHTML =26;
	document.getElementById("ComNumber").innerHTML = 26;
	document.getElementById("userCard").className = "cardDiv twod";
	document.getElementById("computerCard").className = "cardDiv twoh";
	firstRun = true;
}


var playAgain = function() {
	document.getElementById("bodyDefault").style.display = "block";
	document.getElementById("bodyLose").style.display = "none";
	document.getElementById("bodyWin").style.display = "none";
	restart();
}

var simulation = function(){
	var random = Math.random();
	if (random <= .50){
		document.getElementById("bodyWin").style.display = "block";
		document.getElementById("bodyLose").style.display = "none";
		document.getElementById("bodyDefault").style.display = "none";
		document.getElementById("whole").style.backgroundColor = "green";
	}
	else if (random >= .51){
		document.getElementById("bodyWin").style.display = "none";
		document.getElementById("bodyLose").style.display = "block";
		document.getElementById("bodyDefault").style.display = "none";
		document.getElementById("whole").style.backgroundColor = "#ff0000";
	}
}
