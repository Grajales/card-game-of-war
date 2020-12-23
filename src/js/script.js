console.log("hello!");
//Constants definition
let rankA = [1,2,3,4,5,6,7,8,9,10,"Jack","Queen","King"];
let scoreA =[1,2,3,4,5,6,7,8,9,10,11,12,13];
let suits = ["hearts", "spades", "clubs", "diamonds"];
// Deck function
// Creates a deck of cards and shuffles them 1000 times 
   function DeckShuffled(rank,score,suits){
    var deck = new Array();
  
    for(var i = 0; i < 4; i++)//number of suits
    {
      for(var x = 0; x < 13; x++)// number of cards per suit
      {
        var card = {Rank: rank[x], Score: score[x],Suit: suits[i]};
        deck.push(card);
      }
    }
    //shuffle deck
    for (var i = 0; i < 1000; i++)
	{
		var index1 = Math.floor((Math.random() * deck.length));// Get a random index1
		var index2 = Math.floor((Math.random() * deck.length));// Get a random index1
		var tmp = deck[index1]; //store in temp during shuffle 
		deck[index1] = deck[index2]; //change 
		deck[index2] = tmp;
	}
    return deck;
  }

//Class Player gives a player a name and a set of cards (an Array selection from the deck)
  class Player{
    constructor(name){
      this.name= name;
      this.cards=[];
    }
    addCards(cardN){
    this.cards=cardN;
    }
  }

class Game{ 
  constructor(player1,player2){
    this.player1 =player1;
    this.player2 =player2;
  }
   showOfCards() {
    let p1c1 = this.player1.cards[0];
    console.log(p1c1);
    let p2c1 = this.player2.cards[0];
    console.log(p2c1);
    if (p1c1.Score !== p2c1.Score){
    this.notEqual(p1c1,p2c1);
    }
    else {
      let p1c1 = this.player1.cards[5];
     console.log(p1c1);
     let p2c1 = this.player2.cards[5];
     console.log(p2c1); 
     this.notEqual(p1c1,p2c1);
    }
   } 
   notEqual(p1,p2){
     console.log("Not equal cards, Player1: " + p1.Score + " Computer: " + p2.Score)
     if (p1.Score < p2.Score){ 
      this.player2.cards.push(this.player1.cards.shift());
      console.log("Computer number of cards: " + this.player2.cards.length)
      console.log(this.player2.name + " wins this round")
      console.log("Player1 number of cards: " + this.player1.cards.length)
      console.log(this.player1.name + " Looses 1 card in this round")
      } else if (p1.Score > p2.Score) { 
        this.player1.cards.push(this.player2.cards.shift());
        console.log("Player1 number of cards: " + this.player1.cards.length)
        console.log(this.player1.name + " wins this round") 
        console.log("Computer number of cards: " +this.player2.cards.length)
        console.log(this.player2.name + " Looses 1 card in this round")}
    }
  }
  
  //sign = window.prompt('Are you feeling lucky? You are Player1!'); // open the window with Text "Are you feeling lucky"
  sign = prompt('Are you feeling lucky? You are Player1!'); // open the window with Text "Are you feeling lucky"
  console.log(sign);
  deck1 = DeckShuffled(rankA,scoreA,suits);
  console.log(deck1);
  let player1 = new Player("Player1");
  player1.addCards(deck1.slice(0,26));
  console.log(player1.cards)
  let computer = new Player("Computer");
  computer.addCards(deck1.slice(26,52));
  console.log(computer.cards)
  let game1 = new Game(player1,computer);
  game1.showOfCards();


  //References
  //https://cardgames.io/war/
  //https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript