// An isogram is a word that has no repeating letters,
//  consecutive or non-consecutive. Implement a function 
//  that determines whether a string that contains only letters 
//  is an isogram. Assume the empty string is an 
// isogram. Ignore letter case.

function isIsogram(str){
    let splitString = str.split('');
        for(let current = 0; current < splitString.length; current++){
            for(let next = current + 1; next < splitString.length; next++){
                if(splitString[current].toLowerCase() === splitString[next].toLowerCase()){
                    return false;
                }
            }
        }
        return true;
 
 }
 
 console.log(isIsogram('thsonmbca'));  
 // isIsogram('wergjutxcvn')