$("#buton").click(function(){
  var shtuff = $("#stuff").val();
  var erf = $("#erg").val();
  var tigger = $("#tiger").val();
  $("#terble").append(`<tr><td>${shtuff}</td><td>${erf}</td><td>${tigger}</td></tr>`);
    })
