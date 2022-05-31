// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
// The input will be a non-negative integer.

  function digital_root(number) {
    // ...
    if(number < 10)return number;
         return  digital_root(number.toString().split('').reduce((acc,current) => acc+Number(current),0))
}
    
  console.log(digital_root(1233399998888));