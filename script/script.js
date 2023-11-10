var movieName = document.getElementById("movieName");
var rated = document.getElementById("rated");
var runningTime = document.getElementById("runningTime");
var serial = 1;
var table = document.getElementById("display");
function addRow() {
  if (movieName.value != null) {
    var row = table.insertRow(serial);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    cell0.innerHTML = serial;
    cell1.innerHTML = movieName.value;
    cell2.innerHTML = rated.value;
    cell3.innerHTML = runningTime.value;
    serial++;
    document.getElementById("form").reset();
  }
}

function deleteRow() {
  var row = table.insertRow(serial);
  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  var cell3 = row.insertCell(3);
}
