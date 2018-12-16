// Select color input
const colorInput = document.querySelector('#colorPicker');

// Select size inputs
const tableHeight = document.querySelector('#inputHeight');
const tableWidth = document.querySelector('#inputWidth');
const pixelGrid = document.querySelector('#canvasBody');

// Creates the grid
function makeGrid() {
  // Resets table size after each submit button click
  pixelGrid.innerHTML = '';
  // Creates rows
  for (i = 1; i <= tableHeight.value; i++) {
    var row = document.createElement('tr');
    canvasBody.appendChild(row);
    // Creates cells of each row
    for (j = 1; j <= tableWidth.value; j++) {
      cell = document.createElement('td');
      row.appendChild(cell);
      // Paint selected cell after being clicked looping over the 'td' given array
      const paintedCell = document.querySelectorAll('td');
      for(x = 0; x < paintedCell.length; x++) {
        paintedCell[x].addEventListener('click', function (event) {
          event.target.style.backgroundColor = colorInput.value;
        });
      };
    };
  };
};

// When size is submitted by the user, call makeGrid()
document.querySelector('#sizePicker').addEventListener('submit', function(event){
  event.preventDefault();
  makeGrid();
});
