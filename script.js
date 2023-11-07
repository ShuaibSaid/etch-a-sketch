const gridContainer = document.createElement("div");
gridContainer.id = "grid-container"
const gridButton = document.createElement("button");
gridButton.id = "grid-button";
gridButton.textContent = "Click to create new grid";

let maxsize = 1000;

function makeGrid(rows,cols){
    for (i=0; i<(rows*cols); i++){
        gridContainer.style.setProperty('--grid-rows', rows);
        gridContainer.style.setProperty('--grid-cols', cols);
        let gridItem = document.createElement("div");
        gridItem.innerText = (i+1);
        gridContainer.appendChild(gridItem).className = "grid-item";
    }
}

function changeColor(element){
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    element.style.backgroundColor = rgb;
}

function createGrid(){
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild);
    }
    let grid = prompt("Enter the number of rows and columns (max 100)");
    if (grid > 100){
        grid = 100;
    }
    makeGrid(grid,grid);
    grids = document.getElementsByClassName("grid-item");
    for (i=0; i < grids.length; i++){
        grids[i].style.height = Math.round(maxsize / grid) + "px";
        grids[i].style.width = Math.round(maxsize / grid) + "px";
    }
    for (let i = 0; i < grids.length; i++){
        grids[i].addEventListener('mouseover', () => changeColor(grids[i]));
    }

}

document.body.appendChild(gridContainer);
document.body.appendChild(gridButton);
makeGrid(16,16);


gridButton.addEventListener("click", () => createGrid());
grids = document.getElementsByClassName("grid-item");
for (let i = 0; i < grids.length; i++){
    grids[i].addEventListener('mouseover', () => changeColor(grids[i]));
    }