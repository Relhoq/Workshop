let size = 300;

class App {
  constructor() {
    this.pixelRatio = window.devicePixelRatio || 1;
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth * this.pixelRatio;
    this.canvas.height = window.innerHeight * this.pixelRatio;
    this.canvas.style.width = window.innerWidth;
    this.canvas.style.height = window.innerHeight;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.setup();
  }

  setup() {
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const texte = new Text(this.ctx, "IS CODING FUN?", 100);

    //boom boom boom
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(2 * Math.PI);
    texte.drawText(200 / 2, 200 / 2);

    this.ctx.restore();
  }
}

window.onload = function () {
  new App();
};
