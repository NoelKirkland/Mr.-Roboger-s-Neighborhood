// Business logic
function toString (array){
  return array.join(",");
}

// User interface
$(document).ready(function(){
  $("form#the-neighborhood").submit(function(event){
    // Collect initial user input
    const usersNumber = parseInt($("input#input-number").val());
    if(!usersNumber || usersNumber <= 0 || usersNumber > 24){
      alert("Please enter a number between 1 and 24");
    }
    // Create an array of numbers starting from input number to 0
    let numberArray =[];
    for (let index = 0; index <= usersNumber; index ++) {
      numberArray.push(usersNumber - [index]);
    }

    // Reverse order of array so that it starts at 0 and goes to input number
    let sequentialArray = numberArray.reverse();

    // Loop through array and redefine elements outlined in the branches below
    for (var index = 0; index < sequentialArray.length; index++)
    if (sequentialArray[index] === 1 || sequentialArray[index] === 10 || sequentialArray[index] === 11 || sequentialArray[index] === 14 || sequentialArray[index] === 15  || sequentialArray[index] === 16 || sequentialArray[index] === 17 || sequentialArray[index] === 18 || sequentialArray[index] === 19)
        sequentialArray[index] = "Beep!"
    else if (sequentialArray[index] === 2 || sequentialArray[index] === 12 || sequentialArray[index] === 20 || sequentialArray[index] === 21 || sequentialArray[index] === 22 || sequentialArray[index] === 24)
    sequentialArray[index] = "Boop!"
    else if (sequentialArray[index] === 3 || sequentialArray[index] === 13 || sequentialArray[index] === 23)
    sequentialArray[index] = "Won't you be my neighbor?";

    
    let results = toString(sequentialArray);
    $("#answer").fadeIn();
    $("#output").text(results);
    event.preventDefault();
  });
});
