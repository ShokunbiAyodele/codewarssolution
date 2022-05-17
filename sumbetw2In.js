// Given two integers a and b, which can be positive or negative, 
// find the sum of all the integers between and including them 
// and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)

//PREP
//Parameters ===> a,b 
//pseudo code  
//get a and be.. find the sum between them and
//return sum of number between a and b

function getSum(a,b){

    let sum = 0;
    if(a===b)return a;
    for(let i = ((a<b)?a:b); i<= ((a<b)?b:a); i++)sum +=i;
    return sum;
}

console.log(findSum(1,0))



//examples 
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
