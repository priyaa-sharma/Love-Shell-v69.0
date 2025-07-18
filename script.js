const input = document.getElementById('commandInput');
const output = document.getElementById('output');

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const cmd = input.value.trim().toLowerCase();
    input.value = '';
    if (cmd === 'i love priya') {
      typeOutput(heartArt + '\n\n' + loveLetter);
    } else {
      typeOutput("BAMMMM! Unknown Command 😘");
    }
  }
});

function typeOutput(text, index = 0) {
  if (index < text.length) {
    output.innerHTML += text.charAt(index);
    setTimeout(() => typeOutput(text, index + 1), 20);
  }
}

const heartArt = `
   ***   ***
  ***** *****
  ***********
   *********
    *******
     *****
      ***
       *
`;



const loveLetter = `
Helluuuuu Priyaaaaaaaaaaansh 💋
You're cute btw, and always remember that you're always going to be loved by me. im keeping it short bcs you alr know how cringe my writing is. sooooo byeeeeeeeeeeee and xoxoxoxoxoxooxoxoooooooo <3 
(also come back, i miss you so much :))

-your love obvs,
Priya 
`;
