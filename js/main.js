//need a " TODO " type of list the allows a teacher to  add student name in dom
//click button to see list
//button to loop

var students = [];

$("#add").on("click", function() {
  students.push($("input").val())
  console.log(students)
});

$("#list").on("click", function(){
  students.forEach(function(element) {
    $("ul").append("<li>"+element+"</li>");
    console.log(element);
    students = [];
})
});
