$( "#send" ).click(function() {
    
    var t=$('#input').get(0);
    $('#response span').text(t.split("").reverse().join(""));

  });