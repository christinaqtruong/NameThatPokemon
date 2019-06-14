//********START OF READY FUNCTION
$(document).ready(function(){

//on page load, show professor oak and his warning text and the start button after the text is done appearing
$('.image').show();

$(function () {
printWarning(".warning", warning, 0, 80); 
var warned = true;  
});

//shows the start button


//upon clicking the start button, launch the game
$(".start").on('click', pokemonGame.startGame);

//upon typing something in the input page, launch guess checker



});
//*********END OF READY FUNCTION


// //launching the game starts the timer 
var pokemonGame = {
//initial game properties
wordInPlay: null,
timer: 15,
timerOn: false,
timerId: '',
letters: [],
matchedLetters: [],
guessedLetters: [],
guessesLeft: 0,
totalGuesses: 0,
lettersGuessed: null,
wins: 0,

//objects of pokemon
pokemonBank: {
  bulbasaur: {
    silhouette: ""
  },
  ivysaur: {
    silhouette: ""
  },
  venusaur: {
    silhouette: ""
  },
  charmander: {
    silhouette: ""
  },
  charmeleon: {
    silhouette: ""
  },
  charizard: {
    silhouette: ""
  },
  squirtle: {
    silhouette: ""
  },
  wartortle: {
    silhouette: ""
  },
  blastoise: {
    silhouette: ""
  },
  caterpie: {
    silhouette: ""
  },
  metapod: {
    silhouette: ""
  },
  butterfree: {
    silhouette: ""
  },
  weedle: {
    silhouette: ""
  },
  kakuna: {
    silhouette: ""
  },
  beedrill: {
    silhouette: ""
  },
  pidgey: {
    silhouette: ""
  },
  pidgeotto: {
    silhouette: ""
  },
  pidgeot: {
    silhouette: ""
  },
  rattata: {
    silhouette: ""
  },
  raticate: {
    silhouette: ""
  },
  spearow: {
    silhouette: ""
  },
  fearow: {
    silhouette: ""
  },
  ekans: {
    silhouette: ""
  },
  arbok: {
    silhouette: ""
  },
  pikachu: {
    silhouette: ""
  },
  raichu: {
    silhouette: ""
  },
  sandshrew: {
    silhouette: ""
  },
  sandslash: {
    silhouette: ""
  },
  nidoran: {
    silhouette: ""
  },
  nidorina: {
    silhouette: ""
  },
  nidorino: {
    silhouette: ""
  },
  nidoqueen: {
    silhouette: ""
  },
  nidoking: {
    silhouette: ""
  },
  clefairy: {
    silhouette: ""
  },
  clefable: {
    silhouette: ""
  },
  vulpix: {
    silhouette: ""
  },
  ninetales: {
    silhouette: ""
  },
  jigglypuff: {
    silhouette: ""
  },
  wigglytuff: {
    silhouette: ""
  },
  zubat: {
    silhouette: ""
  },
  goldbat: {
    silhouette: ""
  },
  oddish: {
    silhouette: ""
  },
  gloom: {
    silhouette: ""
  },
  vileplume: {
    silhouette: ""
  },
  paras: {
    silhouette: ""
  },
  parasect: {
    silhouette: ""
  },
  venonat: {
    silhouette: ""
  },
  venomoth: {
    silhouette: ""
  },
  diglett: {
    silhouette: ""
  },
  dugtrio: {
    silhouette: ""
  },
  meowth: {
    silhouette: ""
  },
  persian: {
    silhouette: ""
  },
  psyduck: {
    silhouette: ""
  },
  golduck: {
    silhouette: ""
  },
  mankey: {
    silhouette: ""
  },
  primeape: {
    silhouette: ""
  },
  growlithe: {
    silhouette: ""
  },
  arcanine: {
    silhouette: ""
  },
  poliwag: {
    silhouette: ""
  },
  poliwhirl: {
    silhouette: ""
  },
  poliwrath: {
    silhouette: ""
  },
  abra: {
    silhouette: ""
  },
  kadabra: {
    silhouette: ""
  },
  alakazam: {
    silhouette: ""
  },
  machop: {
    silhouette: ""
  },
  machoke: {
    silhouette: ""
  },
  machamp: {
    silhouette: ""
  },
  bellsprout: {
    silhouette: ""
  },
  weepinbell: {
    silhouette: ""
  },
  victreebel: {
    silhouette: ""
  },
  tentacool: {
    silhouette: ""
  },
  tentacruel: {
    silhouette: ""
  },
  geodude: {
    silhouette: ""
  },
  graveler: {
    silhouette: ""
  },
  golem: {
    silhouette: ""
  },
  ponyta: {
    silhouette: ""
  },
  rapidash: {
    silhouette: ""
  },
  slowpoke: {
    silhouette: ""
  },
  slowbro: {
    silhouette: ""
  },
  magnemite: {
    silhouette: ""
  },
  magneton: {
    silhouette: ""
  },
  farfetchd: {
    silhouette: ""
  },
  doduo: {
    silhouette: ""
  },
  dodrio: {
    silhouette: ""
  },
  seel: {
    silhouette: ""
  },
  dewgong: {
    silhouette: ""
  },
  grimer: {
    silhouette: ""
  },
  muk: {
    silhouette: ""
  },
  shellder: {
    silhouette: ""
  },
  cloyster: {
    silhouette: ""
  },
  gastly: {
    silhouette: ""
  },
  haunter: {
    silhouette: ""
  },
  gengar: {
    silhouette: ""
  },
  onix: {
    silhouette: ""
  },
  drowzee: {
    silhouette: ""
  },
  hypno: {
    silhouette: ""
  },
  krabby: {
    silhouette: ""
  },
  kingler: {
    silhouette: ""
  },
  voltorb: {
    silhouette: ""
  },
  electrode: {
    silhouette: ""
  },
  exeggcute: {
    silhouette: ""
  },
  exeggutor: {
    silhouette: ""
  },
  cubone: {
    silhouette: ""
  },
  marowak: {
    silhouette: ""
  },
  hitmonlee: {
    silhouette: ""
  },
  hitmonchan: {
    silhouette: ""
  },
  lickitung: {
    silhouette: ""
  },
  koffing: {
    silhouette: ""
  },
  weezing: {
    silhouette: ""
  },
  rhyhorn: {
    silhouette: ""
  },
  rhydon: {
    silhouette: ""
  },
  chansey: {
    silhouette: ""
  },
  tangela: {
    silhouette: ""
  },
  kangaskhan: {
    silhouette: ""
  },
  horsea: {
    silhouette: ""
  },
  seadra: {
    silhouette: ""
  },
  goldeen: {
    silhouette: ""
  },
  seaking: {
    silhouette: ""
  },
  staryu: {
    silhouette: ""
  },
  starmie: {
    silhouette: ""
  },
  mrMime: {
    silhouette: ""
  },
  scyther: {
    silhouette: ""
  },
  jynx: {
    silhouette: ""
  },
  electabuzz: {
    silhouette: ""
  },
  magmar: {
    silhouette: ""
  },
  pinsir: {
    silhouette: ""
  },
  tauros: {
    silhouette: ""
  },
  magikarp: {
    silhouette: ""
  },
  gyarados: {
    silhouette: ""
  },
  lapras: {
    silhouette: ""
  },
  ditto: {
    silhouette: ""
  },
  eevee: {
    silhouette: ""
  },
  vaporeon: {
    silhouette: ""
  },
  jolteon: {
    silhouette: ""
  },
  flareon: {
    silhouette: ""
  },
  porygon: {
    silhouette: ""
  },
  omanyte: {
    silhouette: ""
  },
  omastar: {
    silhouette: ""
  },
  kabuto: {
    silhouette: ""
  },
  kabutops: {
    silhouette: ""
  },
  aerodactyl: {
    silhouette: ""
  },
  snorlax: {
    silhouette: ""
  },
  articuno: {
    silhouette: ""
  },
  zapdos: {
    silhouette: ""
  },
  moltres: {
    silhouette: ""
  },
  dratini: {
    silhouette: ""
  },
  dragonair: {
    silhouette: ""
  },
  dragonite: {
    silhouette: ""
  },
  mewtwo: {
    silhouette: ""
  },
  mew: {
    silhouette: ""
  }},

  //startGame function called when page loads
  startGame: function(){
    //picks random pokemon from bank
    var randomPokemon = Object.keys(this.pokemonBank);
    this.wordInPlay = randomPokemon[Math.floor(Math.random() * randomPokemon.length)];

    //splits words into individual letters
    this.letters = this.wordInPlay.split("");

    //creates underscores
    this.replacesWord();

    //sets number of guesses user gets
    this.updatesTotalGuesses();
  },

  //runs whenever user guesses a letter
  updatePage: function(letter) {
  if (this.guessesLeft === 0) {
    this.restartGame();
  }

  else {
    //check for incorrect guesses
    this.updateGuesses(letter);

    //check for correct guesses
    this.updateLetters(letter);

    //rebuild the letter display
    this.replacesWord();

    //if user wins, restart game
    if (this.updateWins() === true) {
      this.restartGame();
    }

  }


},

//function for incorrect guess
updateGuesses: function(letter) {
  //if letter is not in array
  if ((this.guessedLetters.indexOf(leter) === -1) && (this.letters.indexOf(letter) === -1)) {

    //add letter to array
    this.guessedLetters.push(letter);

    //decrease guesses by one
    this.guessesLeft--;

    //update remaining guesses
    document.querySelector("#guesses-remaining").innterHTML = this.guessesLeft;

    
    document.querySelector("#guessed-letters").innerHTML = this.guessedLetters.join(", ");
  }
},

//correct guesses function
updatesTotalGuesses: function(){
  //gets more guesses the longer the word is
  this.totalGuesses = this.letters.length + 5;
  this.guessesLeft = this.totalGuesses;

  //renders guesses to page
  document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
},

updateLetters: function(letter) {
  //loop through letters
  for (var i=0; i< this.letters.length; i++) {
    //guess letter already there
    if ((letter === this.letters[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
      //push letter into array
      this.matchedLetters.push(letter);
    }
  }
},

//function displays word being guessed
replacesWord: function() {
  //empties string
  var word = "";

  //loop through letters 
  for (var i=0; i<this.letters.length; i++) {
    //if letter is guessed, display
    if (this.matchedLetters.indexOf(this.letters[i]) !== -1) {
      word += this.letters[i];
    }
    //if it has not been guessed, show _
    else {
      word += "&nbsp;_&nbsp;";
    }
  }

  document.querySelector("#current-word").innerHTML = word;
},

restartGame: function() {
//resets variables
document.querySelector("guessed-letters").innerHTML = "";
this.wordInPlay = null;
this.letters = [];
this.matchedLetters = [];
this.guessedLetters = [];
this.guessesLeft = 0;
this.totalGuesses = 0;
this.lettersGuessed = null;
this.startGame();
this.replacesWord();
},

//checks if user won
updateWins: function() {
  var win;

  // If you haven't correctly guessed a letter in the word yet, we set win to false.
  if (this.matchedLetters.length === 0) {
    win = false;
  }
  // Otherwise, we set win to true.
  else {
    win = true;
  }

  for (var i=0; i < this.letters.length; i++){
    if (this.matchedLetters.indexOf(this.letters[i]) === -1) {
      win = false;
    }
  }

  if (win) {
    this.wins = this.wins + 1;

    document.querySelector("#wins").innerHTML = this.wins;

    var youWon = "Congrats! Here is your " + randomPokemon + "!"
    printWarning(youWon);

    return true;
  }

  return false;
}
};

pokemonGame.startGame();

document.onkeyup = function(event) {
  if (event.keyCode >= 49 && event.keyCode <= 90) {
    pokemonGame.lettersGuessed = event.key.toLowerCase();

    pokemonGame.updatePage(pokemonGame.lettersGuessed);
  }
};

//hides professor oak and his spiel

// //shows the guess that pokemon shadow


//if spiel is done, show instructions
$("#instructions").show();

// //function to print out prof oaks spiels
var printWarning = function (target, message, index, interval){   
    if (index < message.length) {
        $(target).append(message[index++]);
        
    setTimeout(function () { printWarning(target, message, index, interval); }, interval);
    
    }
}


// //variables for printWarning function that prints Prof Oak's spiels upon starting/ending the game
// //opening line
var warning = "WAIT! It's dangerous out there! Take one of these Pokémon! If you can guess its name, that is."

// //losing condition
// var youLost = "Sorry! Looks like this " + randomPokemon + " is staying with me."
// printWarning(youLost);



// var firebaseConfig = {
//     apiKey: "AIzaSyCcQP2ckmJAX5PUARZUgkpOdmQZTc1jUEM",
//     authDomain: "namethatpokemon-1992.firebaseapp.com",
//     databaseURL: "https://namethatpokemon-1992.firebaseio.com",
//     projectId: "namethatpokemon-1992",
//     storageBucket: "",
//     messagingSenderId: "696952940851",
//     appId: "1:696952940851:web:c20c66649487401a"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);