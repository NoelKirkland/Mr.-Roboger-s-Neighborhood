// Business logic


// User interface
$(document).ready(function(){
  $("form#the-neighborhood").submit(function(event){
    const usersNumber = parseInt($("input#input-number").val());
    let numberArray =[];
    for (let index = 0; index <= usersNumber; index += 1) {
      numberArray.push(usersNumber - [index]);
    }
    event.preventDefault();
  });
});