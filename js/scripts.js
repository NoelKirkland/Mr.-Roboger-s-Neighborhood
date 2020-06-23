// User interface
function rogersTranslator (userNumber){
  let numberArray =[];

  for (var index = 1; index <= userNumber; index++){
    let userNumber = index + "";
    if (userNumber.includes(3)){
      numberArray.push("Won't you be my neighbor?");
    } else if (userNumber.includes(2)){
      numberArray.push("Boop!");
    } else if (userNumber.includes(1)){
      numberArray.push("Beep!");
    } else {
      numberArray.push(index); 
    };
  };
  return numberArray
}

// UI
$(document).ready(function(){
  $("#reversed").click(function(){
    $("#output-reversed").fadeToggle();
  });
  $("form#the-neighborhood").submit(function(event){
    event.preventDefault();

    const userNum = $("input#input-number").val();
    let numArray = rogersTranslator(userNum)
    let results = numArray.toString();
    let resultsReversed = numArray.reverse();
    $("#answer").fadeIn();
    $("#output").text(results);
    $("#output-reversed").text(resultsReversed); 
  });
});
