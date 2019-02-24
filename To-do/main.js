//generate to do list
//add a form
//input
//Keep a running total

$(document).ready(function(){
    $('#button').click(function(event){
      //.val is a method that will take a value from the input and it will be enter upon a click of the button
        var toAdd = $('input').val();
        //preventDefault will allow the form to prevent the default behavior of the form element; which will refresh upon clicking enter
        event.preventDefault();
        //.append will concat everything together as a list item
        $('ol').append('<li>' + toAdd + '</li>');
        //it's a call back function that will clear the value upon click function
        clearInputs();
    });

    $(document).on('dblclick','li', function(){
      //douable click (dblclick) is an argument that will crossout the <li>, and fadeout slowly
        $(this).toggleClass('cross-out').fadeOut('slow');
    });

    function clearInputs() {
        $('input').val('');
    }
});
