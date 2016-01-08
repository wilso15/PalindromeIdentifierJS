"use strict";

// take in input, 
// check to see if input is a palindrome,
// let user know



function getWord(){
	var wordBeingEntered;
	wordBeingEntered = prompt("Type a word to see if it is a palindrome.")
	return wordBeingEntered
	}
	
function eliminateSpaces(wordBeingEntered){
	var wordWithoutSpaces;
	wordWithoutSpaces = wordBeingEntered.replace(/\s/g, '');
	return wordWithoutSpaces
}
	
function reverse(wordWithoutSpaces){
    console.log(wordWithoutSpaces.split("").reverse().join(""));
	return wordWithoutSpaces.split("").reverse().join("");
	}
	
function checkIfPalindrome(wordWithoutSpaces, reversedWord){
	if (wordWithoutSpaces === reversedWord){
	console.log("Your word is, in fact, a palindrome.")
	}
	else {
	console.log("That is not a palindrome.")
	}
}


function main(){
	var word;
	word = getWord();
	var wordWithoutSpaces;
	wordWithoutSpaces = eliminateSpaces(word);
	var reversedWord;
	reversedWord = reverse(wordWithoutSpaces);
	return checkIfPalindrome(wordWithoutSpaces, reversedWord);
}

main();


