//Card object - template function
var card = function(value, name, suit){
  this.value = value;
  this.name = name;
  this.suit = suit;
};

//Deck object - template function
var deck = function(){
  this.names = ['1','2','3','4','5','6','7','8','9','10','J','Q','K'];
  this.suits = ['Hearts','Diamonds','Spades','Clubs'];
  var cards = [];
  
  for(var i = 0; i< this.suits.length;i++)
  {
    for(var j = 0; j< this.names.length;j++){
      cards.push(new card(j+1, this.names[j], this.suits[i]));
      
    }
      
  }

  return cards;
};

//shuffling cards
function stackShuffle(number) {
  var deck = number;
  var i, j, k, temp;

  for (i = 0; i < deck.length; i++)
  {
      k = Math.floor(Math.random() * (i+1));
      temp = deck[i] ;
      deck[i] = deck[k];
      deck[k] = temp;
    }
  return deck;
}

//array of players
var players =[];
players[0]= new player(prompt("Enter your player1 name?"));
players[1] = new player(prompt("Enter your player2 name?"));


cardCounter = 0;
playerCounter = 0;

//player temp fn
var player= function(name){
    this.name = name;
}

//Creating a deck object
var myDeck = new deck();

window.onload = function(){

   stackShuffle(myDeck);
  //Loop for all 52 cards in the deck
  for(var i = 0; i< myDeck.length; i++)
  {
    div = document.createElement('div');
    div.className = 'card';
    div.addEventListener('click', function(event){

      if(cardCounter == 2){
        var flippCard = document.getElementsByClassName("show");
        cardCounter = 1;
      }
      else if(cardCounter == 1){
        //queryselector???
        currentValue = ;
        previousValue = ;
        if(currentValue == previousValue){
            players[playerCounter].score = players[playerCounter].score + 10;
        }
      }
      else
        cardCounter++;


    });





    var ascii_char;
    if(myDeck[i].suit =='Diamonds'){
      ascii_char = '&diams;';
    }
    else
    {
      ascii_char = '&'+myDeck[i].suit.toLowerCase()+';';
    }
    div.innerHTML ='<span class="number">'+ myDeck[i].name +'</span><span class="suit">' + ascii_char +'</span>';
    document.body.appendChild(div);
  }


  messageDiv = document.createElement('div');
  messageDiv.setAttribute('id','messages');
  messageDiv.innerHTML= players[0].name +', this is your turn';
  document.body.appendChild(messageDiv);



};

