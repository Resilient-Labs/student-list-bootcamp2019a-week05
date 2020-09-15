//create a form for teacher to input each students name whos present
// use an eventlistener to be able to click the button
// give the form a value enter data
// be able to create a hidden list with those values "student names"
// show the complete list with a click of a button (eventlistener)


let classRoom = [];

$(document).ready(function(){
	$("#addStudent").on("click",function(){

		let list = $("input").val()
		classRoom.push(list);

	});

	$("#showList").on("click", function(element){
		classRoom.forEach(function(element){
				//Append list items grab value from input
			$("ul").append("<li>"+element+"</li>")
			classRoom = []
		});

	});

});
