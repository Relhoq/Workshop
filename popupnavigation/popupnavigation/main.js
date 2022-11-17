// prompt, alert, confirm

// const initialTransform = 'matrix(10, 0, 0, 10, 0, 0)'
const initialTransform = 'matrix(-10, 1.2246467991473533e-15, -1.2246467991473533e-15, -10, 0, 0)'

const imageSrc = { tree: "tree.jpeg", poster: "poster.svg" }
let frameCount = 0

const images = Object.fromEntries(Object.entries(imageSrc).map(([name, src]) => {

    const img = new Image()
    img.src = `images/${src}`

    return [name, img]
}))

console.log(images);

const cv = document.querySelector('#canvas')
const c = cv.getContext('2d')
let width, height

const IMAGE = images.poster
IMAGE.classList.add('poster')

document.body.appendChild(IMAGE)

resizeCanvas()

requestAnimationFrame(animate)

document.querySelector('#rotate').onclick = () => {
    scenarios.askToTurnBy(180)
    // const angle = prompt('rotate ?')

    // if (angle !== null) {
    //     rotate(toRadians(angle))
    // }
};

document.querySelector('#zoom').onclick = () => {
    // const value = prompt('Zoom')
    // console.log(value);
    scenarios.meteo()
};
document.querySelector('#answer').onclick = () => {
    // const value = prompt('Zoom')
    // console.log(value);
    scenarios.iknow()
};

function animate() {

    c.save()
    c.resetTransform()
    c.fillStyle = 'red'
    c.fillRect(0, 0, width, height)
    c.restore()

    // setTransform(c.getTransform())

    c.drawImage(images.tree, 0, 0)

    if (frameCount === 0) {
        setTransform(new DOMMatrix(initialTransform));
    }

    frameCount++;

    requestAnimationFrame(animate)
}

function resizeCanvas() {
    cv.width = innerWidth
    cv.height = innerHeight

    width = innerWidth
    height = innerHeight
}

function translate() {
    c.translate(...arguments) // spread operator
    applyTransform()
}
function rotate(angle) {
    c.rotate(toRadians(angle)) // spread operator
    applyTransform()
}
function scale() {
    c.scale(...arguments) // spread operator
    applyTransform()
}

function setTransform() {
    c.setTransform(...arguments) // spread operator
    applyTransform()
}

function getTransform() {
    const matrix = c.getTransform()
    console.log(matrix.toString());
    return matrix
}

function applyTransform() {
    const matrix = getTransform()
    IMAGE.style.transform = matrix.toString();
}