let sentences = null;
// var words = null;
var count = 0;
var wordArray = [];
var currentWord = 0;
const initRotateSentences = () => {
  if (count > 0) return;
  sentences = document.querySelectorAll(".words");
  // console.log(sentences)
  sentences.forEach((el, id) => {
    initRotateText(el, id);
  });
};

const initRotateText = (sent, idSent) => {
  console.log(sent);
  let words = sent.getElementsByClassName("word");
  // words[currentWord].style.opacity = 1;
  for (var i = 0; i < words.length; i++) {
    // console.log(words[i].innerHTML)
    splitLetters(words[i], idSent);
  }
  console.log(wordArray)
  wordArray[idSent] = wordArray[idSent].flat();
  changeWord(idSent);
};

const splitLetters = (word, indexWord) => {
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
  console.log(wordArray)
  wordArray[indexWord] ??= []
  wordArray[indexWord].push(letters);
  count++;
};

const changeWord = (idSent) => {
  var cw = wordArray[idSent];
  for (var i = 0; i < cw.length; i++) {
    cw[i].className = "letter behind";
    cw[i].parentElement.style.opacity = 1;
    animateLetterIn(cw, i);
  }

  currentWord = currentWord + 1;
};

const animateLetterIn = (nw, i) => {
  setTimeout(() => {
    nw[i].className = "letter in";
  }, 340 + i * 80);
};

export default initRotateSentences;
