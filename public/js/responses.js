$( "#send" ).click(function() {
    $.post("Question", {"question" : $('#input').val()}).done(function(data) {
     
      const items= (data+'').split(",");
      console.log(items);
      for(var i=0;i<items.length;i++)
      {
       
        $('#response ul').append("<li>"+items[i]+"</li>");
        
      }
      
    });
  });