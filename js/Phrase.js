class Phrase {
     constructor(phrase){
        this.phrase = phrase.toLowerCase();
     };
     addPhraseToDisplay() { // Adds phrase to display by creating 'li'
         const div = document.createElement('div'); 
         const mainDiv = $('#phrase')
         $(mainDiv).append(div);
         div.className = 'section';
         div.setAttribute('id', 'phrase')
         const ul = document.createElement('ul');
         $(div).append(ul)
         const lettersInPhrase = this.phrase.split('');
         lettersInPhrase.forEach(char => {
             console.log(char);
             const createLi = document.createElement('li');
             ul.appendChild(createLi);
             createLi.className = 'hide letter ' + char;
             createLi.innerHTML = char;
             if (char === ' ') {
                 createLi.className = 'space';
             };
         });
     };
     checkLetter(letter){
         if (this.phrase.includes(letter)){
             return true;

         } else return false;
     };
     showMatchedLetter(letter) { // Shows the matched letter by changing class to show
         const matched = document.querySelectorAll('.hide');
         for (let i = 0; i < matched.length; i++) {
             console.log(matched[i]);
             if (letter === matched[i].innerHTML) {
                 matched[i].className = 'show';
             }
         };
     };

 }

