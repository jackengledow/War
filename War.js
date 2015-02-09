var deck = ["Ac", "Ad", "As", "Ah", "2c", "2d", "2s", "2h", "3c", "3d", "3s", "3h", "4c", "4d", "4s", "4h", "5c", "5d", "5h", "5s", "6c", "6d", "6h", "6s", "7c", "7d", "7h", "7s", "8c", "8d", "8h", "8s", "9c", "9d", "9h", "9s", "10c", "10d", "10h", "10s", "Jc", "Jd", "Jh", "Js", "Qc", "Qd", "Qh", "Qs", "Kc", "Kd", "Kh", "Ks"];

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
}
shuffle(deck);

