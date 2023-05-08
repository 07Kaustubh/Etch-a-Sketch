const container = document.getElementById("container");
let gridSize = 16;

function createGrid() {
  gridSize = prompt("Enter the number of squares per side (maximum 100):");
  gridSize = parseInt(gridSize);

  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    alert("Invalid input. Please enter a number between 1 and 100.");
    return;
  }

  removeGrid();
  setContainerSize();
  generateGrid();
}

function setContainerSize() {
  const squareSize = 480 / gridSize;
  container.style.width = `${squareSize * gridSize}px`;
}

function generateGrid() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", changeColor);
    container.appendChild(square);
  }
}

function removeGrid() {
  while (container.firstChild) {
    container.firstChild.removeEventListener("mouseover", changeColor);
    container.removeChild(container.firstChild);
  }
}

function changeColor(e) {
  const randomRGB = `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;
  const square = e.target;
  square.style.backgroundColor = randomRGB;
  square.style.opacity = (parseFloat(square.style.opacity) || 0) + 0.1;
}

function getRandomValue() {
  return Math.floor(Math.random() * 256);
}
