//to do list app
//teacher can enter a student name
let student = []
//a button to add students into the array
document.getElementById("submit").addEventListener("click", function(){
  event.preventDefault();
  //that name will be stored in a array
  //that name will be stored in a array
  //grab the value from the input
  let studentInput = document.getElementById("studentName").value;
  student.push(studentInput);
});
//teacher can click a button to see the who list
document.getElementById("roster").addEventListener("click", function(){
  //use the for each lop
  student.forEach(function(element){
  let list = document.getElementById("studentUl");
  let item = document.createElement("li");
  item.innerText = element;
  list.appendChild(item);
  })
});

//display the name in the dom
