$( "#send" ).click(function() {
    
    var t=document.getElementById('input').value;
    $('#response span').text(t.split("").reverse().join(""));

  });