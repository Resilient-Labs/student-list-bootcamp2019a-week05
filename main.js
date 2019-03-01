var peopleOnTime = [];

$(document).ready(function(){

  $("#onTimeBtn").on("click", function(){
    var personOnTime = $("#onTime").val();
    peopleOnTime.push(personOnTime);
    console.log(peopleOnTime);
    clearInputs();

});

  $("#show").on("click", function(){
    let html = '';
    for (let i = 0; i < peopleOnTime.length; i++) {
      html += '<li>' + peopleOnTime[i] + '</li>'
    }
    $("#presentList").html(html);
  });
  // $("#onTimeBtn").on("click", function(){
  //   var personOnTime = $("#onTime").val();
  //   peopleOnTime.push(personOntime);
  //   console.log(peopleOntime);
  //   clearInputs();
  // });
//
// $("#show").on("click", function(){
//   $("#presentList").html("<li>"+peopleOnTime.join("</li><li>") + "</li>");
// });


$("#clearAll").on("click", function(){
  $("#showAll").html("");
  peopleOnTime = [];
    $("#presentList").html('')
});

function clearInputs (){
  $("#onTime").val("");
}
});
