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
    if (sequentialArray[index] === 1 || sequentialArray[index] === 11 || sequentialArray[index] === 14 || sequentialArray[index] === 15  || sequentialArray[index] === 16 || sequentialArray[index] === 17 || sequentialArray[index] === 18 || sequentialArray[index] === 19)
        sequentialArray[index] = "Beep!"
    else if (sequentialArray[index] === 2 || sequentialArray[index] === 12 || sequentialArray[index] === 20 || sequentialArray[index] === 21 || sequentialArray[index] === 22 || sequentialArray[index] === 24)
    sequentialArray[index] = "Boop!"
    else if (sequentialArray[index] === 3 || sequentialArray[index] === 13 || sequentialArray[index] === 23)
    sequentialArray[index] = "Won't you be my neighbor?";
    // let beep = sequentialArray.map(function(element){
    //   return replace(element === 1, "Beep!")
    // });
    // let numberString = toString(sequentialArray)
    // let beep = sequentialArray.replace(/1/g, "Beep!");
    // let boop = beep.replace(/2/g, "Boop!");
    event.preventDefault();
  });
});