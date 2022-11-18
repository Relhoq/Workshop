// prompt, alert, confirm

// const initialTransform = 'matrix(10, 0, 0, 10, 0, 0)'
const initialTransform =
  "matrix(-10, 1.2246467991473533e-15, -1.2246467991473533e-15, -10, 0, 0)";

const imageSrc = {
  tree: "tree.jpeg",
  poster: "poster.svg",
  template: "FORMAT.jpg",
  fond1: "FOND1.svg",
  fond2: "FOND2.svg",
  formage: "Formage.png",
};
let frameCount = 0;

const images = Object.fromEntries(
  Object.entries(imageSrc).map(([name, src]) => {
    const img = new Image();
    img.src = `images/${src}`;

    return [name, img];
  })
);

console.log(images);

const cv = document.querySelector("#canvas");
const c = cv.getContext("2d");
let width, height;

cv.width = window.innerWidth;
cv.height = window.innerHeight;

const IMAGE = images.fond2;
IMAGE.classList.add("poster");

document.body.appendChild(IMAGE);

resizeCanvas();

requestAnimationFrame(animate);

document.querySelector("#rotate").onclick = () => {
  scenarios.askToTurnBy(Math.random(359));
  // const angle = prompt('rotate ?')

  // if (angle !== null) {
  //     rotate(toRadians(angle))
  // }
};

document.querySelector("#move").onclick = () => {
  // const value = prompt('Zoom')
  // console.log(value);
  scenarios.meteo();
};
document.querySelector("#answer").onclick = () => {
  // const value = prompt('Zoom')
  // console.log(value);
  scenarios.iknow();
};

function animate() {
  c.save();
  c.resetTransform();
  c.drawImage(images.fond1, 0, 0);
  c.restore();

  c.save();
  c.resetTransform();
  c.fillStyle = "red";
  c.fillRect(0, 0, width, height);
  c.restore();

  // setTransform(c.getTransform(0, 0));

  if (frameCount === 0) {
    setTransform(new DOMMatrix(initialTransform));
  }

  frameCount++;

  requestAnimationFrame(animate);
}

function resizeCanvas() {
  width = innerWidth;
  height = innerHeight;
}

function translate() {
  c.translate(...arguments); // spread operator
  applyTransform();
}
function rotate(angle) {
  c.rotate(toRadians(angle)); // spread operator
  applyTransform();
}
function scale() {
  c.scale(...arguments); // spread operator
  applyTransform();
}

function setTransform() {
  c.setTransform(...arguments); // spread operator
  applyTransform();
}

function getTransform() {
  const matrix = c.getTransform();
  console.log(matrix.toString());
  return matrix;
}

function applyTransform() {
  const matrix = getTransform();
  IMAGE.style.transform = matrix.toString();
}
