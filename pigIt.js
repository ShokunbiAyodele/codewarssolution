// Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. 
// Leave punctuation marks untouched.


function pigIt(str){
    //Code here
  return   str.split(' ').map(word => {
 let firstLetter = word.slice(1);
   return  firstLetter + word.charAt(0)+ 'ay';
    }).join(' ')
  }

  console.log(pigIt('Pig latin is cool'));