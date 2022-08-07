//Determine when mouse button is being held down
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

function fillGrid(){
    //Clear all divs that already exist in the grid
    grid.innerHTML = '';

    //Create new divs
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
}

fillGrid()

//Update color variable if colour is changed
colorPicker.onchange = function() {
    color = colorPicker.value;
}

let slider = document.getElementById("size");
slider.onchange = function() {
    rows = parseInt(slider.value);
    fillGrid();
}
slider.oninput = function() {
    let label = document.getElementById("sizeLabel");
    label.innerText = slider.value + 'x' + slider.value;
}