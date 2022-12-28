function createGrid(gridSize){
    let gridContainer = document.querySelector(".grid");
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.style.cssText = `\
            height:${90/gridSize}%;\
            aspect-ratio:${gridSize / 1};
            display: flex;\
            `;
        for(let j = 0; j < gridSize; j++){
            const col = document.createElement("div");
            col.style.cssText = `height:100%; aspect-ratio: 1 / 1; background: white;`;
            col.setAttribute("class", `tile`);
            row.appendChild(col);
        }
        gridContainer.appendChild(row);
    }
    
    let tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {tile.addEventListener('mouseover',(e) => {e.target.style.backgroundColor = "black"});}
    );
}

function removeGrid(){
    let gridContainer = document.querySelector(".grid");
    console.log(gridContainer);
    while(gridContainer.firstChild) {gridContainer.removeChild(gridContainer.firstChild)};
}

// Main function

var slider = document.getElementById("myRange");
var output = document.getElementById("gridSize");
output.innerHTML = `${slider.value}x${slider.value}`; // Display the default slider value

let gridSize = slider.value;
createGrid(gridSize);

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
    let gridSize = slider.value;
    removeGrid();
    createGrid(gridSize);
}