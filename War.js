var J = 11;
var Q = 12;
var K = 13;
var A = 14;
var j;
var o;
var deck = [ A, A, A, A, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, J, J, J, J, Q, Q, Q, Q, K, K, K, K];
var userDeck = deck.slice(0, 26);
var computerDeck = deck.slice(26, 52);
var i;

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
	console.log(userDeck);
	var computerDeck = deck.slice(26, 52);
	console.log(computerDeck);
	for(i = 0; i < userDeck.length; i++){
		return userDeck[i];
	}
	for(i = 0; i < computerDeck.length; i++){
		return computerDeck[i];
	}
	if (computerDeck[i] > userDeck[i]){
		console.log("lose");
	}
	else if (computerDeck[i] < userDeck[i]){
		console.log("win");
	}
	else if (computerDeck[i] === userDeck[i]){
		console.log("tie");
	}
}
shuffle(deck);

