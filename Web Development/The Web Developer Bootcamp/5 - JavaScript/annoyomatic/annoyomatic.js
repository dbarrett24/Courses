// var answer = prompt("Are we there yet?");

// while(answer !== "yes" && answer !== "yeah"){
//     var answer = prompt("Are we there yet?");
// }
// var answer = alert("Finally, we made it!");



//VERSION 2
var answer = prompt("Are we there yet?");

while(answer.indexOf('yes') === -1){
    var answer = prompt("Are we there yet?");
}
var answer = alert("Finally, we made it!");