// array that stores names
//
// button has an event listener
//
// for each to scroll through myArray
//
// append each name to the document
//
// as the student walks in teacher can enter names and store them
//form,input, event listener, button to store
// a button that can show all studuent names in the dom
//event listener,button


// var names = []

$(document).ready(function(){
var names = [];
  $('#stashName').on('click', function(){
    
    var student = $('input').val();
    names.push(student);
    console.log(names)


  });

  $('#showNames').on('click', function(){
    $('#namesList').children().remove();
    names.forEach(function(el){
      $('#namesList').append('<li>'+el+'</li>');

    });


  });



});
