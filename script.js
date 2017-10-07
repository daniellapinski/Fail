$("button#yo").click(()=>{

  // jquery syntax works like this
  // $("thingtoget").stufftodo()

  // instead of alerting, do this:
  // get a thing on the page, change the text

  const myvar = $("input#name1").val();
  const urvar = $("input#name2").val();
  $("p#display").append(myvar + " " + urvar);
})
