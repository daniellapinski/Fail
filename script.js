$("button#yo").click(()=>{
  const myvar = $("input#name1").val();
  const urvar = $("input#name2").val();
  $("p#display").append(myvar + " " + urvar);
})
