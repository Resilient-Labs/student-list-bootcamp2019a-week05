$(document).ready(function(){
  var studentList
  var students = []
 $(".submitButton").on("click", function(){
    // console.log("submit")
    var list = $("input").val()
    students.push(list)
    //.push into array on every click
  })
  var displayButton = $(".displayButton").on("click", function(ele){
    console.log("display")
    students.forEach(function(element){


    // students.forEach(function){}

    $("ul").append("<li>"+element+"</li>")
   })
    //for.each over the array and for each item in the array we will create an li
    //.append the li's to the ul

  })








})
