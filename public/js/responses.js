$( "#send" ).click(function() {
    $.post("Question", {"question" : $('#input').val()}).done(function( data ) {
      
      $('#response span').text(data.split("").reverse().join(""));
    });
  });