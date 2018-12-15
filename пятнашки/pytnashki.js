var tiles = [];
var FreeCell = {y:3, x:3};
var shuffleTiles = false;


function CreateCellNull() {
    var cell = document.createElement("div");
    cell.classList.add("field-cell", "field-cell-null");
    return cell;
}

function setCellOffset(cell) {
    cell.style.left = (16 +(16 + 80) * cell.x) + "px";
    cell.style.top = (16 +(16 + 80) * cell.y) + "px";
    
}

function appendCell(cell) {
    var field = document.getElementById("field");
    field.appendChild(cell);
}

function createField() {
    var x, y, cell;
    for (y = 0; y < 4; ++y) {
        for (x = 0; x < 4; ++x) {
            cell = CreateCellNull();
            cell.y = y;
            cell.x = x;
            setCellOffset(cell);
            appendCell(cell);
        }
    }
}

function CreateCellTiles() {
    var cell = document.createElement("div");
    cell.classList.add("field-cell", "field-cell-tile");
    return cell;
}

function createTiles() {
    var x, y, cell;
    for (y = 0; y < 4; ++y) {
        for (x = 0; x < 4; ++x) {
            n = y*4+x+1;
            if (n<16) {
                cell = CreateCellTiles();
                cell.y = y;
                cell.x = x;
                cell.innerHTML = n;
                setCellOffset(cell);
                appendCell(cell);
                tiles.push(cell);
            }
        }     
    }
}

function between(a,b,t) {
   return a <= t && t <= b || b <= t && t <= a;
}

function tileClick(event) {
    
}

function shuffleTiles() {
    var i,index;
    for (i=0; i<1000; i++) {
        index = Math.floor(Math.random() * tilse.length);
        tiles[index].click();
    }
    shuffleTiles = true;
}

createField();
createTiles();

shuffleTiles();