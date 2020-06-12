// Business logic
function toString (array){
  return array.join("");
}

// User interface
$(document).ready(function(){
  $("form#the-neighborhood").submit(function(event){
    const usersNumber = parseInt($("input#input-number").val());
    let numberArray =[];
    for (let index = 0; index <= usersNumber; index += 1) {
      numberArray.push(usersNumber - [index]);
    }
    let sequentialArray = numberArray.reverse();
    for (var index = 0; index < sequentialArray.length; index++)
    if (sequentialArray[index] === 1)
        sequentialArray[index] = "Beep!"
    else if (sequentialArray[index] === 2)
    sequentialArray[index] = "Boop!";
    // let beep = sequentialArray.map(function(element){
    //   return replace(element === 1, "Beep!")
    // });
    // let numberString = toString(sequentialArray)
    // let beep = sequentialArray.replace(/1/g, "Beep!");
    // let boop = beep.replace(/2/g, "Boop!");
    event.preventDefault();
  });
});