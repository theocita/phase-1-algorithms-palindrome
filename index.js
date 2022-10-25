function isPalindrome(word) {
  return word == word.split('').reverse().join(''); 
}
  


/* 
  Add your pseudocode here

 Call isPalindrome with a word as an argument
  iterate over word forwards and backwords, then rejoin them.

  
*/

/*
  Add written explanation of your solution here
  I called the function isPalindrome and passed the argument "word" through it.
  When i returned it,  the word has to equal to the same word if it was flipped backwords.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("civic"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
