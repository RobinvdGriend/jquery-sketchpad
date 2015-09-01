//Create container object outside of function for performance
var $container = $("#container");

var createGrid = function() {
  var gridSize = Number(prompt("Please enter a gridsize (e.g. \"64\")."))

  //Clear grid before creating a new one
  $container.find("table").remove();

  $container.append("<table>")
  var $table = $("table");

  //Creates every table row
  for(i = 0; i < gridSize; i++) {
    $table.append("<tr>");
    var $tableRow = $("tr").last();

    //Creates every table cell
    for(j = 0; j < gridSize; j++) {
      $tableRow.append("<td></td>");

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
  $(document).on("mouseenter", "td", colorCell);
  $(document).on("click", "#reset", createGrid);
});
