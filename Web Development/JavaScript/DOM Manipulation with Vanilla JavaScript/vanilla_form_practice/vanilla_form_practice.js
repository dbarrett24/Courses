//Take user data from a form and display it back to the user
//when they hit the submit button

var submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click",saveName,false);

function saveName(){
 var nameVal = document.getElementById("your-name").value;
 
 var name = document.getElementById("your-name");
 name.value = "";
 var outputElement = document.getElementById("output");
console.log(outputElement);
outputElement.innerHTML = nameVal;
}