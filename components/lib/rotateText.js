var words = null;
var count = 0;
var wordArray = [];
var currentWord = 0;

const initRotateText = () => {
    var words = document.getElementsByClassName("word");
  words[currentWord].style.opacity = 1;
  if (count > 0) return;
  for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
  }
  for (let i = 0; i < words.length; i++) {
    setTimeout(() => {
      changeWord();
    }, 1000);
  }
};

const changeWord = () => {
  var cw = wordArray[currentWord];
  var nw =
    currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = "letter behind";
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = currentWord + 1;
};

const animateLetterIn = (nw, i) => {
  setTimeout(() => {
    nw[i].className = "letter in";
  }, 340 + i * 80);
};

const splitLetters = (word) => {
  var content = word.innerHTML;
  word.innerHTML = "";
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement("span");
    letter.className = "letter";
    if (i > 0 && content[i - 1] == " ") {
    }
    if (content[i] == " ") letter.innerHTML = `&nbsp;`;
    else {
      letter.innerHTML = content[i];
    }
    word.appendChild(letter);
    letters.push(letter);
  }
  wordArray.push(letters);
  count++;
};

export default initRotateText;