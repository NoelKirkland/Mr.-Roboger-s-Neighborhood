// User interface
$(document).ready(function(){
  $("#reversed").click(function(){
    $("#output-reversed").fadeToggle();
  });
  $("form#the-neighborhood").submit(function(event){
    event.preventDefault();

    const userNumber = $("input#input-number").val();
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

    let results = numberArray.toString();
    let resultsReversed = numberArray.reverse();
    $("#answer").fadeIn();
    $("#output").text(results);
    $("#output-reversed").text(resultsReversed); 
  });
});
