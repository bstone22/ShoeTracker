//Fucntion checks if a string is Palindrome

function isPalindrome(string)
{
  string = string.toLowerCase();              //makes all lower case
  
  var charArray = string.split('');           //breaks string into char array
  
  //console.log(charArray);
  
  var valid = 'abcdefghijklmnopqrstuvwxyz'.split(''); //valid options
  
  //console.log(valid);
  
  var letters = [];
  
  charArray.forEach(char =>{  
    if(valid.indexOf(char) > 1) letters.push(char);     //removes all non valid letter options 
  });
  

  if(letters.join('') === letters.reverse().join('')) return true;
  else return false;
}

console.log(isPalindrome("Madam I'm Adam"));