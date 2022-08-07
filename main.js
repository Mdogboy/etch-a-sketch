//Determine when mouse button is being held down in the grid
let mouseDown = false;

document.body.addEventListener("mousedown", e => {
    mouseDown = true;
})
document.body.addEventListener("mouseup", e => {
    mouseDown = false;
})

//Get the selected colour
let colorPicker = document.getElementById("color-picker");
let color = colorPicker.value;

//Create grid of divs
let GRID_SIZE = 600;
let rows = 16;

let grid = document.querySelector(".grid");

for(let i = 0; i < rows; i++){
    for(let j = 0; j < rows; j++){
        let tile = document.createElement("div");
        tile.style.backgroundColor = "white";
        tile.style.height = GRID_SIZE/rows + "px";
        tile.style.width = GRID_SIZE/rows + "px";

        tile.addEventListener("mouseover", e => {
            if(mouseDown){
                tile.style.backgroundColor = color;
            }
        })
        tile.addEventListener("mousedown", e => {
            tile.style.backgroundColor = color;
        })

        grid.appendChild(tile);
    }
}

//Update color variable if colour is changed
colorPicker.onchange = function() {
    color = colorPicker.value;
}