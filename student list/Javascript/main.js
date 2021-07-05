//Creating a student list that a teacher can add students names to as they enter the room and then be able to click a button that displays all students currently in the list.
//to-do: make attendance list style that compares submitted list to class roster, allow easy clicking of pre-saved names into the list, allow removal of names from the list, add a student to permanent roster, style.
let students=[]
//Teacher will be inputting students names as they enter and then submitting that name into the array. Bonus: make able to submit with enter.
document.getElementById("nameForm").addEventListener("submit",function(e){
  //Must make it not automatically submit/refresh page.
  e.preventDefault();
  //If i were adding a last name input, e.target would submit both because i targetted the form instead of an individual input
  //This function will be using the value inside of the input field
  students.push(e.target.nameInput.value);
  console.log(students)
})
//Need to click a button and display the list of students currently submitted to the list
document.getElementById("recallNames").addEventListener("click",function(){
  students.forEach(function(element){
    //For every element in the array, an li needs to be created and its contents altered
    let list = document.createElement("li");
    list.innerText = element;
    document.getElementById("studentList").appendChild(list);
  })
})
