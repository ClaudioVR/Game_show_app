const qwerty = document.getElementById('qwerty'); //keyboard buttons
const phrase = document.getElementById('phrase'); //empty ul
const button = document.querySelector('button');
let missed = 0; //wrong answers
const startGameButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay'); //welcome page

const phrases = [
  'happy friday',
  'time is money',
  'just do it',
  'never quit',
  'coding rules'
];

//chosen phrase for game
const phraseArray = getRandomPhraseAsArray(phrases);
//hidden letters on display
const visbilePhrase = document.querySelector('#phrase ul');
//chosen letter from keyboard
let chosenLetter;



//remove overlay
startGameButton.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

//get random phrase from array phrases
function getRandomPhraseAsArray(arr) {
  let randomPhrase = phrases[Math.floor(Math.random()*phrases.length)];
  return randomPhrase.split("");
}

//display randomly picked phrase
function addPhraseToDisplay(arr) {
  for (i = 0; i < arr.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = arr[i];
    visbilePhrase.appendChild(listItem);
    if (arr[i] !== " ") {
      listItem.className = 'letter';
    } else {
      listItem.className = 'space';
    }
  }
}


//check chosen letters for match in phrase
function checkLetter(guess) {
  const letters = document.querySelectorAll('.letter'); //letters with className .letter
  for (i = 0; i < letters.length; i++) {
    if (guess.textContent == letters[i].textContent) {
      letters[i].className = 'show';
      const correctGuess = document.querySelector('show');
    } 
  } return null;
}

//Event listener on keyboard letters
qwerty.addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON') {
		const chosenLetterButton = e.target;
		chosenLetterButton.classList.add('chosen'); //classListt.add() applies class .chosen
		chosenLetterButton.disabled = 'true'; //disable clicked button
    checkLetter(chosenLetterButton); // call checkLetter Function with chosen letter
  }
});





getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
