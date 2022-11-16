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
    let x = this.canvas.width / 2;
    let y = this.canvas.height / 2;

    const texte = new Text(this.ctx, "IS CODING FUN?", 100);


    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(2 * Math.PI);
    texte.drawText(0, 0);
    this.ctx.restore();
  }
}

window.onload = function () {
  new App();
};
