//This is a function that takes in two strings as parameters, the first is a note and the second is a list of words.  The function will search for the notetext words within the magazineText.  If all the words are found, then the note will be create and returned true, if not all the words are found within the magazineText, then the fucntion will return false. 

function harmlessRansomNote(noteText, magazineText)
{
  var noteArray = noteText.split(' ');
  var magArray = magazineText.split(' ');
  var magObj = {};
  
  //using a hashTable
  
  magArray.forEach(word => {            //is current word in List
    if (!magObj[word]) magObj[word] = 0;  //no, create word and set equal to 0
    magObj[word]++;                     //exists, so increment 
    
  });

  var noteIsPossible = true;
  
  noteArray.forEach(word => {                           //check each word in the note array
    if (magObj[word]){                                  //if it exists, subtract count, 
      magObj[word]--;
      if (magObj[word] < 0) noteIsPossible = false;     //if goes below 0, then false 
    }
    else{
      noteIsPossible = false;
    }
  });
  
  console.log(magObj);
  
  return noteIsPossible;
  
}

harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');

//The string above will return true, if you remove 1 secret and 1 note from the magazineText, the function will return false. 

//Big O notation Review
// O(1)
// O(n)
// O(n2)
// O(log n)