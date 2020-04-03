
$('#txtQuestion').on("input",function(){
    $("#send").attr('disabled', $(this).val().length === 0); 
});


$("#send").click(function() {
    $.post("Question", {"question" : $('#txtQuestion').val()}).done(function(data) {
        $('#response').html(data);
    });
  });

  $(document).on("click", ".oui", function() {

    const actorName = $(this).attr('data-actor');
    console.info(actorName);
    $.post("Question", {"question" : actorName}).done(function(data) {
        $('#response').html(data);
    });
  });
