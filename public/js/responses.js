
$('#txtQuestion').on("input",function(){
    $("#send").attr('disabled', $(this).val().length === 0); 
});


$( "#send" ).click(function() {

  
    $.post("Question", {"question" : $('#txtQuestion').val()}).done(function(data) {
      
      const items= (data+'').split(",");
      console.log(items);
      for(var i=0;i<items.length;i++)
      {
       
        $('#response ul').append("<li>"+items[i]+"</li>");
        
      }
      
    });
  });
