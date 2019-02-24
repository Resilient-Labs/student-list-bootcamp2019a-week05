//Creating a student list that a teacher can add students names to as they enter the room and then be able to click a button that displays all students currently in the list.
//bonus: make it an attendance list that compares the class roster with the current student list.
//bonus1: could also make it so some students names are already there and just need to be clicked, while also having option of adding in new ones. extraextra: be able to add a student to the list of permanent student names that are there.
//bonus2: select random student(s)
let students=[]
//Teacher will be inputting students names as they enter and then submitting that name into the array. Bonus: make able to submit with enter.
document.getElementById("nameForm").addEventListener("submit",function(e){
  //Must make it not automatically submit/refresh page.
  e.preventDefault();
  //If i were adding a last name input, e.target would submit both because i targetted the form instead of an individual input
  //This function will be using the value inside of the input field
  students.push(e.target.addingStudent.value);
  console.log(students)
})
//Need to click a button and display the list of students currently submitted to the list
document.getElementById("recallNames").addEventListener("click",function(){
  var list = document.getElementById("studentList")
  students.forEach(function(element){
    list.appendChild("<li>"+element+"</li>");
  })

})
//Question: does button go in form or outside of it and why?
