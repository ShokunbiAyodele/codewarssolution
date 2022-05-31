// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;
    // enter your magic here
    let inputString = str.split('');
    for(let i = 0; i<inputString.length;i++){
        if(inputString[i] == 'a' | inputString[i]== 'e' | inputString[i] =='i' | inputString[i] =='o' | inputString[i] =='u'){
            vowelsCount++;
        }
    }
    
    return vowelsCount;
  }

  console.log(getCount('aeiou'));