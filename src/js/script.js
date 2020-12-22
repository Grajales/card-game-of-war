console.log("hello!");

class Card {
    constructor(suit, rank, score){
      this.suit = suit;
      this.rank = rank;
      this.score =score;
    }
  }
  class Deck{
    constructor(length){
      this.length = length;
    }
    cards() {
      console.log("cards")
    } 
    draw(){
      console.log("draw")
    }
     
  }
  let rankA = [1,2,3,4,5,6,7,8,9,10,"Jack","Queen","King"];
  let scoreA =[1,2,3,4,5,6,7,8,9,10,11,12,13];
  let suits = ["hearts", "spades", "clubs", "diamonds"];
  
  for (let i=0; i<4; i++ ){
    suits[i] = new Card(suits[i],rankA,scoreA)
    console.log(suits[i])
  }
  