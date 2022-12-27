const gridSize = 16;
const widthPct = 1/gridSize;

let gridContainer = document.querySelector(".grid");
for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.style.cssText = `\
        height:${80/gridSize}%; width:80%;\
        display: flex;\
        align-items:space-between;`;
    for(let j = 0; j < gridSize; j++){
        const col = document.createElement("div");
        col.style.cssText = `height:100%; width: ${widthPct * 100}%; background: white; border: 0.1px solid gray;`;
        col.setAttribute("class", `tile`);
        row.appendChild(col);
    }
    gridContainer.appendChild(row);
}

let tiles = document.querySelectorAll(".tile");
tiles.forEach(tile => {
    tile.addEventListener('mouseover',(e) => {e.target.style.backgroundColor = "gray"});
    tile.addEventListener('mouseout',(e) => {e.target.style.backgroundColor = "white"});
    }
);