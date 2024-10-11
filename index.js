const main = document.querySelector("main");
const billBoard = document.querySelector(".bill_board");
const text = document.querySelector("#text");
const span = document.querySelector("#span");

const quotes = [
  "Life is all about patience, hardworking and fear of God",
  "You should always bear in mind that God's time is the best: hardwork pays",
  "Prayer is the model of all journey in life, always be prayerful",
  "Love one another and do to others what you will like others to do to you",
  "Do everything for the glory of God and secondly for the salvation of souls",
  "Always bear it in mind to accept all diffculty that comes in your life as your cross",
  "Do good always so as goodness will be your lot always good will locate you",
  "Fear God who is above all and obey his commands"
];

for (let i = 0; i < quotes.length; i++) {
  // console.log(quotes[i]);
}


const index = [
  '1','2','3','4','5','6','7','8'
]

for (let i = 0; i < index.length; i++){
  // console.log(index[i]);
  
}

let board = index

let container = quotes

const btn = document.getElementById("button");

btn.addEventListener('click', ()=>{
  const container = Math.floor(Math.random() * quotes.length)
  text.textContent = quotes[container];
  console.log(container);
  const board = Math.floor(Math.random() * index.length)
  span.textContent = index[board]
  console.log(board);
  
});
