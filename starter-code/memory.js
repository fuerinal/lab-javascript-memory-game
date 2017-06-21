// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function() {
  var accountant = 0;
  this.cont = 0;







  this.card1 = "";
  this.card2 = "";
  this.cards = [{
      name: "aquaman",
      img: "aquaman.jpg"
    },
    {
      name: "batman",
      img: "batman.jpg"
    },
    {
      name: "captain america",
      img: "captain-america.jpg"
    },
    {
      name: "fantastic four",
      img: "fantastic-four.jpg"
    },
    {
      name: "flash",
      img: "flash.jpg"
    },
    {
      name: "green arrow",
      img: "green-arrow.jpg"
    },
    {
      name: "green lantern",
      img: "green-lantern.jpg"
    },
    {
      name: "ironman",
      img: "ironman.jpg"
    },
    {
      name: "spiderman",
      img: "spiderman.jpg"
    },
    {
      name: "superman",
      img: "superman.jpg"
    },
    {
      name: "the avengers",
      img: "the-avengers.jpg"
    },
    {
      name: "thor",
      img: "thor.jpg"
    },
    {
      name: "aquaman",
      img: "aquaman.jpg"
    },
    {
      name: "batman",
      img: "batman.jpg"
    },
    {
      name: "captain america",
      img: "captain-america.jpg"
    },
    {
      name: "fantastic four",
      img: "fantastic-four.jpg"
    },
    {
      name: "flash",
      img: "flash.jpg"
    },
    {
      name: "green arrow",
      img: "green-arrow.jpg"
    },
    {
      name: "green lantern",
      img: "green-lantern.jpg"
    },
    {
      name: "ironman",
      img: "ironman.jpg"
    },
    {
      name: "spiderman",
      img: "spiderman.jpg"
    },
    {
      name: "superman",
      img: "superman.jpg"
    },
    {
      name: "the avengers",
      img: "the-avengers.jpg"
    },
    {
      name: "thor",
      img: "thor.jpg"
    },
  ];
  this.selectedCards = [];
  this.pairsClicked = 0;
  this.correctPairs = 0;
  //for (var i = 0; i < this.cards.length; i++) {
  //this.selectedCards.push(this.cards[i].name);

  //  }
};

MemoryGame.prototype._shuffleCards = function() {
  _.shuffle(this.cards);

};

MemoryGame.prototype.selectCard = function(card) {
  //this.cont++;
  //this.selectedCards[this.cont] = card;
  if (card1 == card2) {
    return "true";

  } else {
    this.selectedCards.pop();
    this.selectedCards.pop();
    this.cont -= 2;
  }
  //this.selectedCards.push(card);
};
// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function() {
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" i-index=' + index + ' id="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="img/' + pic.name + '"';
    html += '    id="' + pic.img + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    id="' + pic.img + '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;
  $(".card").click(function() {
    this.cont++;
    //console.log(this.id);
    console.log(this);
    //$(".back").toggleClass("back");
    this.selectedCards[this.cont] = this.id;
    this.selectedCards.push(this.cards[this.cont].name);
    if (this.cont % 2 === 0) {
      MemoryGame.prototype.selectCard(this.selectedCards[this.cont], this.selectedCards[this.cont - 1]);

    }
    //$(this).css('background-image', 'url:' + this.img);




  });
});
