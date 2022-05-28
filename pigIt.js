// Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. 
// Leave punctuation marks untouched.


function pigIt(str){
    //Code here
  return   str.split(' ').map(word => {
     if((/([a-zA-Z])/).test(word)){
       let firstLetter = word.slice(1);
   return  firstLetter + word.charAt(0)+ 'ay';
       }
    else{
      return word
    }
    }).join(' ')
  } 


  console.log(pigIt('i am a winner'))