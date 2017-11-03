function why() {
  const myInt = "7"
  $("body").append(`${myInt}`)
    $("#terble").append(`<tr>
    <th>myInt:</th>
    <th>myString:</th>
    <th>myNumString:</th></tr>  <tr>
    <td>7</td>
    <td>the number 7</td>
    <td>7s</td>
  </tr>`);
  $("#terble2").append(`<tr>
  <th>Addition</th>
  <th>myInt+myInt?</th>
  <th>myInt+myString?</th></tr>  <tr>
  <td></td>
  <td>14</td>
  <td>7 the number 7</td>
</tr>`)
console.log("The code works");
};
   why();
