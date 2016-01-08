"use strict";

// take in input, 
// check to see if input is a palindrome,
// let user know



function getWord(){
	var wordBeingEntered;
	wordBeingEntered = prompt("Type a word to see if it is a palindrome.")
	return wordBeingEntered
	}
	
function reverse(word){
    console.log(word.split("").reverse().join(""));
	return word.split("").reverse().join("");
	}
	
function checkIfPalindrome(word, reversedWord){
	if (word === reversedWord){
	console.log("Your word is, in fact, a palindrome.")
	}
	else {
	console.log("That is not a palindrome.")
	}
}


function main(){
	var word;
	word = getWord();
	var reversedWord;
	reversedWord = reverse(word);
	return checkIfPalindrome(word, reversedWord);
}

main();


