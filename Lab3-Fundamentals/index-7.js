/*The following object represents a basketball game and keeps track of the score as the
game progresses.
a) Modify each of the methods so that they can be ‘chained’ together and the last line of
the example code works
b) Add a new method to print the full time final score
c) Add a new object property to keep track of the number of fouls and a method to
increment it, similar but separate to the score. Include the foul count in the half time and
full time console messages
d) Test your object by chaining all the method calls together in different combinations.*/

const basketballGame = {
  score: 0,
  freeThrow() {
   //this.score ++ ; 
   console.log(this.score++);
   return this;  //(a)
  },
  basket() {
   this.score += 2;
   return this;
  },
  threePointer() {
   this.score += 3;
   return this;
  },
  halfTime() {
   console.log('Halftime score is '+this.score);
   return this;
  },
  fullTime() {
   console.log('Final score is ' + this.score); // (b)
   return this;
  },
  foul: 0,
  foulCount() {
    this.foul ++;
    return this;
  },
  halfFoul() {
    console.log('Halftime foul is ' + this.foul);
    return this;
  }

  }
  
  //modify each of the above object methods to enable function chaining as below:
  //basketballGame.basket().foulCount().freeThrow().freeThrow().foulCount().basket().threePointer().halfTime().halfFoul().freeThrow().fullTime();

  //basketballGame.basket(); 
  //basketballGame.foulCount(); // keeps adding because += is used.

  basketballGame.freeThrow();
  