const startGameButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay'); //welcome page

const qwerty = document.getElementById('qwerty'); //keyboard buttons
const phrase = document.getElementById('phrase'); //empty ul
const button = document.querySelector('button');

const show = document.getElementsByClassName('show');
const letter = document.getElementsByClassName('letter');


let missed = 0; //wrong answers
let match = null;

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

addPhraseToDisplay(phraseArray); // call fuction to display phrase


//check chosen letters for match in phrase

function checkLetter(guess) {
	match = null;
	let letters = document.querySelectorAll('.letter'); //unrevealed letters collection
  for (i = 0; i < letters.length; i++) {
    if (guess.textContent == letters[i].textContent) {
      letters[i].classList.add('show');
			match = true;
    } 
  } return match; 
}

//Event listener on keyboard letters

qwerty.addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON') {
		const chosenLetterButton = e.target;
		chosenLetterButton.classList.add('chosen'); 
		chosenLetterButton.disabled = 'true'; 
    checkLetter(chosenLetterButton); 
		
		const letterFound = match;
		if (letterFound == null) {
		missed++;
		console.log('Failed guesses: ' + missed);
		}
  }
	
	checkWin(); 
	
});


// check if game is won or game over

function checkWin() {

	const header = document.querySelector('#overlay h2')
	
	if (show.length == letter.length) {
		overlay.style.display = 'flex';
		overlay.className = 'win';
		header.textContent = 'Congratulations, you won.'
		// TODO: change button to play again
	} else if (missed >= 5) {
		overlay.style.display = 'flex';
		overlay.className = 'lose';
		header.textContent = 'Game over.'
		// TODO: change button to play again
		}
}





