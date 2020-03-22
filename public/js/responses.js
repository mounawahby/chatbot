$( "#send" ).click(function() {
    $.post("Question", {"question" : $('#input').val()}).done(function( dd ) {
      
      $('#response span').text(dd.split("").reverse().join(""));
    });
  });