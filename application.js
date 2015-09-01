var createGrid = function() {
  var $container = $("#container");
  $container.append("<table>")

  //Creates every table row
  for(i = 0; i < 16; i++) {
    $container.append("<tr>");

    //Creates every table cell
    for(j = 0; j < 16; j++) {
      $container.append("<td></td>");

    };
    //Closes every table row
    $container.append("</tr>")
  };
  //Closes every table cell
  $container.append("</table>")
};

//Changes the color of a cell
var colorCell = function() {
  $(this).addClass("colored");
};

$("document").ready(function(){
  createGrid();
  $("td").on("mouseenter", colorCell);
});
