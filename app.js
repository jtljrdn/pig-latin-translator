// Pig Latin Translator

const enter = document.getElementById("enter");
const box = document.getElementById("inputSnt");

box.addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    document.getElementById("enter").click();
    console.log('Enter pressed')
    };
});
enter.addEventListener('click', function(){ // Checks for click
  var input = document.getElementById("inputSnt").value; // defines the input by taking the value of the text box when 
  inputArray = input.split(" ");
  for (let i = 0;i < inputArray.length; i++) {
    var num = inputArray.includes("0") || inputArray.includes("1") || inputArray.includes("2") || inputArray.includes("4") || inputArray.includes("5") || inputArray.includes("6") || inputArray.includes("7") || inputArray.includes("8") || inputArray.includes("9"); //Checks for numbers - Need to optimize
    if (num == true) { 
      console.log("Used Numbers")
      output = "Used Numbers"
      break
    } else if (inputArray[i].startsWith("a")||inputArray[i].startsWith("e")||inputArray[i].startsWith("i")||inputArray[i].startsWith("o")||inputArray[i].startsWith("u")) {
      inputArray[i] = inputArray[i] + "yay";
    } else if (inputArray[i].startsWith("th")) {
      inputArray[i] = inputArray[i].slice(2) + "thay";
    } else if (inputArray[i].startsWith("sm")) {
      inputArray[i] = inputArray[i].slice(2) + "smay";
    } else if (inputArray[i].startsWith("st")) {
      inputArray[i] = inputArray[i].slice(2) + "stay";
    } else if (inputArray[i].startsWith("gl")) {
      inputArray[i] = inputArray[i].slice(2) + "glay";
    } else if (inputArray[i].startsWith("tr")) {
      inputArray[i] = inputArray[i].slice(2) + "tray";
    } else if (inputArray[i].startsWith("fl")) {
      inputArray[i] = inputArray[i].slice(2) + "flay";
    } else if (inputArray[i].startsWith("ch")) {
      inputArray[i] = inputArray[i].slice(2) + "chay";
    } else if (inputArray[i].startsWith("sh")) {
      inputArray[i] = inputArray[i].slice(2) + "shay";
    } else {
      var firstLetter = inputArray[i].slice(0, 1);
      inputArray[i] = inputArray[i].slice(1) + firstLetter + "ay";
    };

    output = inputArray.join(" ");

  };
  document.getElementById("output").innerHTML = output;
  console.log(inputArray);
});


