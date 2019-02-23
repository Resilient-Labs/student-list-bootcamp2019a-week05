// To do list app
// App where a teacher can enter a name (array)
// and click and append names to the Dom
// Uses for.each
//Button can show all the lists in the Dom
// var list=['','','','','']

//Input & Button
  var myArray = []
$(document).ready(function() {
//When button is pressed names append to the Dom

//This annoymous function gets the input and puts input into an array
  $("#btn").on("click", function(){
//Make the inputs = a variable so I can append them to the Dom
    let list = $("input").val()
    myArray.push(list);
    console.log(myArray);

    })

    // list.push("")

    // ^^push this to an array

      // alert("button");
      //display everything in my array on click
      $("#display").on("click", function(e){
        myArray.forEach(function(zebra){
          //forEach append array
          $("ul").append("<li>"+zebra+"</li>")
        });


      });
  });





//Enter name into a Input
//When button is pressed names append to the Dom
