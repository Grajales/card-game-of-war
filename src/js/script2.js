console.log("hello!");
//Constants definition
let rankA = [1,2,3,4,5,6,7,8,9,10,"Jack","Queen","King"];
let scoreA =[1,2,3,4,5,6,7,8,9,10,11,12,13];
//let scoreA =[1,1,1,1,1,1,1,1,1,1,2,2,2];
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
     let flag =0;
     let m =0;
     for (let i=0; i<200; i++) {
    let p1c1 = this.player1.cards[m];
    let p2c1 = this.player2.cards[m];
    console.log(p1c1);
    console.log(p2c1);

    if (p1c1.Score !== p2c1.Score){
        for (let k=0; k< (m+1); k++) {
            console.log("m = " + m)
            this.notEqual(p1c1,p2c1);
            }
        
    flag = 0;
    m = 0;
    }
      else {
        if ((this.player1.cards.length > (4+m)) && (this.player2.cards.length > (4+m)) ) {
        m = 4 + (flag * 4);
        flag = flag +1 ;
        } else {  console.log("game is over, there are not enough cards to solve the match")}
      }

    if (this.player1.cards.length == 0 || this.player2.cards.length == 0 ) {
      if (this.player1.cards.length> this.player2.cards/length) {
        console.log(this.player1.name + " wins!!")
        } else { console.log(this.player2.name + " wins!!")  }
    }
   } // end of for loop
  }
   notEqual(p1,p2,loop){
     console.log("Not equal cards, Player1: " + p1.Score + " Computer: " + p2.Score)
     if (p1.Score < p2.Score){ 
      this.player2.cards.push(this.player2.cards.shift())
      this.player2.cards.push(this.player1.cards.shift());
      console.log(this.player1.name + " Looses 1 card in this round and it has  " + this.player1.cards.length + " cards")
      console.log(this.player2.name + " wins this round and it has " + this.player2.cards.length + " cards")  
    } else if (p1.Score > p2.Score) { 
        this.player1.cards.push(this.player1.cards.shift());
        this.player1.cards.push(this.player2.cards.shift());
        console.log(this.player1.name + " wins this round and has " + this.player1.cards.length + " cards")
        console.log(this.player2.name + " Looses 1 card in this round and it has " +this.player2.cards.length + " cards")
        }
      }
  }
  
  //sign = window.prompt('Are you feeling lucky? You are Player1!'); // open the window with Text "Are you feeling lucky"
  //sign = prompt('Are you feeling lucky? You are Player1!'); // open the window with Text "Are you feeling lucky"
  //console.log(sign);
  deck1 = DeckShuffled(rankA,scoreA,suits);
  let player1 = new Player("Player1");
  player1.addCards(deck1.slice(0,26));
  //console.log(player1.cards)
  let computer = new Player("Computer");
  computer.addCards(deck1.slice(26,52));
  //console.log(computer.cards)
  let game1 = new Game(player1,computer);
  game1.showOfCards();


  //References
  //https://cardgames.io/war/
  //https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript