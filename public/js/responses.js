
$('#txtQuestion').on("input",function(){
    $("#send").attr('disabled', $(this).val().length === 0); 
});

function GetData(actorName){

  $.post("Question", {"question" : actorName}).done(function(data) {
      $('#response').html(data);
  });
};

$("#send").click(function() {
  GetData($('#txtQuestion').val());
});

$(document).on("click", ".oui", function() {

  const actorName = $(this).attr('data-actor');
  console.info(actorName);
  GetData(actorName);
});

$(document).on("click", ".non", function() {

  const actorName = $(this).attr('data-actor');
  console.info(actorName);
  GetData("/NOACTOR");
});