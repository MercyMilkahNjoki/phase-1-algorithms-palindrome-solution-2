function isPalindrome(word) {
  // Write your algorithm here
  //iterate from beinning to the middle
  for (i=0;i < word.length/2;i++){
    //check each letter to the corresponding letter from the end
    const j = word.length - 1 - i;
    if(word.charAt(i) !== word.charAt(j)){
      return false;
    }
  }
  return true;
}
//if we reach the middle and all the letters match, return true


/* 
  Add your pseudocode here
  iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
    if the letters don't match, return false
  if we reach the middle, and all the letters match, return true
*/

/*
  testcase 
  a bb a
  *    *
    **
    return true 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
