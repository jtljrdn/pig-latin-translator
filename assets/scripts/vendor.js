//Constant Declarations
const enter = document.getElementById("enter");
const box = document.getElementById("inputSnt");
const vowels = ['a','e','i','o','u']

//Event listeners
box.addEventListener('keydown', function(event){enterInput(event)});
enter.addEventListener('click', function(){translate()}); // Checks for click, calls translate function

// isVowel function
function isVowel(x) { 
    return ("aeiouAEIOU".indexOf(x) != -1); 
}