// Business logic


// User interface
$(document).ready(function(){
  $("form#the-neighborhood").submit(function(event){
    const usersNumber = parseInt($("input#input-number").val());
while (usersNumber > 0) {
  console.log(usersNumber);
  usersNumber --;
}
console.log("When I get to zero I'm going to come over there, neighbor!")
    
    event.preventDefault();
  });
});