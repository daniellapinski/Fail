var myInt = 4;
var myString = " the number 4 ";
var myNumString = "4";


$("#challenge5vars").append(`
  <table>
    <tr>
      <td class="qa">myInt:</td>
      <td>${myInt}</td>
    </tr>
    <tr>
      <td class="qa">myString:</td>
      <td>${myString}</td>
    </tr>
    <tr>
      <td class="qa">myNumString:</td>
      <td>${myNumString}</td></tr>
  </table>`);
$("#challenge5predictions").append(`
  <table>
    <tr>
      <th class="mathtype" colspan=2><b>Addition</b></th>
    </tr>
    <tr>
      <td class="qa">myInt+myInt?</td>
      <td>${myInt+myInt}</td>
    </tr>
    <tr>
      <td class="qa">myInt+myString?</td>
      <td>${myInt+myString}</td>
    </tr>
    <tr>
      <td class="qa">myInt+myNumString?</td>
      <td>${myInt+myNumString}</td>
    </tr>
    <tr>
      <td class="qa">myNumString+myInt?</td>
      <td>${myNumString+myInt}</td>
    </tr>
    <tr>
      <th class="mathtype" colspan=2><b>Fancier addition</b></th>
    </tr>
    <tr>
      <td class="qa">myInt+myNumString+myString?</td>
      <td>${myInt+myNumString+myString}</td>
    </tr>
    <tr>
      <td class="qa">myInt+myInt+myString?</td>
      <td>${myInt+myInt+myString}</td>
    </tr>
     <tr>
      <td class="qa">myString+myInt+myInt?</td>
      <td>${myString+myInt+myInt}</td>
    </tr>
    <tr>
      <th class="mathtype" colspan=2><b>Subtraction</b></th>
    </tr>
    <tr>
      <td class="qa">myInt-myString?</td>
      <td>${myInt-myString}</td>
    </tr>
   <tr>
      <td class="qa">myInt-myNumString?</td>
      <td>${myInt-myNumString}</td>
  </tr>
   <tr>
      <td class="qa">myString-myNumString?</td>
      <td>${myString-myNumString}</td>
  </tr>
   <tr>
      <th class="mathtype" colspan=2><b>Comparisons</b></th>
  </tr>
   <tr>
      <td class="qa">myInt==myNumString?</td>
      <td>${myInt==myNumString}</td>
  </tr>
  <tr>
       <td class="qa">myInt===myNumString</td>
       <td>${myInt===myNumString}</td>
  </tr>
  <tr>
       <th class="mathtype" colspan=2><b>Multiplication</b></th>
  </tr>
  <tr>
       <td class="qa">myInt*myInt?</td>
       <td>${myInt*myInt}</td>
  </tr>
  <tr>
       <td class="qa">myInt*myNumString?</td>
       <td>${myInt*myNumString}</td>
  </tr>
  <tr>
       <td class="qa">myInt*myString?</td>
       <td>${myInt*myString}</td>
  </tr>
  </table>`);
