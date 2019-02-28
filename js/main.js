

//2 create var = getElenment by ID()
// var studentlist = [ 'Kenda', 'Charles', 'Sam', 'Taye', 'Ray', 'Oraca', 'Rick', 'Sully', 'Reya', 'Anwar', 'Anwar', 'Prascilla','Sully']
var studentlist = []
var studentName = document.getElementById('studentName');
var list = document.getElementById('list');


list.addEventListener('click', function(event){
    studentlist.forEach(updatelist);
});

studentName.addEventListener('submit', function (event) {
event.preventDefault()

var inputName = document.getElementById('name').value;


//target property-----

//1 console.log('hello') make sure js functions.
// console.log(event.target.studentName.value)
studentlist.push(inputName);
console.log(studentlist);
console.log(inputName);


});



function updatelist(item){
    console.log(item)
    var bullet = document.getElementById('addToList');
    var bulletList = document.createElement('li')
    var listbullet = document.createTextNode(item);
    bulletList.append(listbullet);
    bullet.append(bulletList); 
}


// function myFunction() {
//     var node = document.createElement("LI");
//     var textnode = document.createTextNode("Water");
//     node.appendChild(textnode);
//     document.getElementById("myList").appendChild(node);
//   }