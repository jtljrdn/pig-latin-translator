// Pig Latin Translator

//Functions
function enterInput(event){ //Submits translation when 'Enter' key is pressed
  if (event.key == "Enter") {
    document.getElementById("enter").click();
    console.log('Enter pressed')
    };
}

function translate(){ //Handles actual translation
  let input = document.getElementById("inputSnt").value; // defines the input by taking the value of the text box when 
  let inputArray = input.split(" ");
  let debug = input.split(" ");
  for (let i = 0;i < inputArray.length; i++) {
    var num = inputArray.includes("0") || inputArray.includes("1") || inputArray.includes("2") || inputArray.includes("4") || inputArray.includes("5") || inputArray.includes("6") || inputArray.includes("7") || inputArray.includes("8") || inputArray.includes("9"); //Checks for numbers - Need to optimize
    if (num == true) { 
      console.log("Used Numbers")
      output = "Please don't use numbers (will fix eventually)"
      break
    } else if (isVowel(inputArray[i].slice(0,1))) {
      inputArray[i] = inputArray[i] + "yay";
    } else if (isVowel(inputArray[i].slice(2,3))){
      inputArray[i] = inputArray[i].slice(2) + inputArray[i].slice(0,2) + "ay";
    } else if (inputArray[i].includes(" ")) { // Fix this - Needs to remove empty strings with no text
      inputArray[i] = inputArray[i];
    } else {
      let firstLetter = inputArray[i].slice(0, 1);
      inputArray[i] = inputArray[i].slice(1) + firstLetter + "ay";
    };
    document.getElementById("box").style.display = "block";
    output = inputArray.join(" ");

  };
  document.getElementById("output").innerHTML = output;
  console.log("array: " + inputArray);
  console.log("input: " + debug);
};
