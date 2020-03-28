
$('#txtQuestion').on("input",function(){
    $("#send").attr('disabled', $(this).val().length === 0); 
});


$( "#send" ).click(function() {

  
    $.post("Question", {"question" : $('#txtQuestion').val()}).done(function(data) {
      
      $('#response ul').empty();
      const items= (data+'').split(",");
      console.log(items);
     
        $('#response ul').append(data);
        
      
      
    });
  });
