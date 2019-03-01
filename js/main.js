// Create a form that takes attendance as students walk into the classroom.
// Can use jquery.

// As student walks in room
// Teacher enters student name into form

//Names held in (empty)array
//one button to enter names into array
//one button to display list in dom
//Click event - Event listener that fires off function that
//loops using for each
//Append all names to dom

let classRoom = [];

$(document).ready(function(){
	$("#add").on("click",function(){

		let list = $("input").val()
		classRoom.push(list);
		$("input").val("");
		console.log(classRoom);

	});

	$("#display").on("click", function(elt){
		$("#names").children().remove();
		classRoom.forEach(function(element){
				//Append list items grab value from input
			$("ul").append("<li>"+element+"</li>")

		});
	});

});
