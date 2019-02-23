//User enters name in form
//User submits name on click
//Save names in array
//User displays all names on the DOM

let attendance = []

$(document).ready(function(){
  $("#insert").on("click", function(){

    let list = $("input").val()
    attendance.push(list);
    $("input").val("");
    console.log(attendance);
});

$("#display").on("click", function(elt){
  attendance.forEach(function(element){
    $("ul").append("<li>"+element+"</li>")
    });
  });

});
