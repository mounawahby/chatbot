$( "#send" ).click(function() {
    
    var t=$('#input').val();
    $('#response span').text(t.split("").reverse().join(""));

  });