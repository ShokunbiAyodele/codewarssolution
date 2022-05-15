// Digital root is the recursive sum of all the digits/binary in a number.
// Given n, take the sum of the digits/binary of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
// The input will be a non-negative integer.

function digital_binary_root(n) {
    // ...
    let sum=0;
    let digitsOfN = (n>>> 0).toString(2);
   let arrayDigit = digitsOfN.split('');
    if(arrayDigit.length > 1){
     sum = arrayDigit.reduce((acc,current) => acc+ Number(current),0)
    }

    return sum;
  }
  
  console.log(digital_root(30));