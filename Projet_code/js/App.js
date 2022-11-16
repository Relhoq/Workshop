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
    this.texte = new Text(this.ctx, "IS CODING FUN?", 600 * this.pixelRatio);
    this.boutons = [];
    this.bouton1 = new Button("ZOOM", this.ctx, 40 * this.pixelRatio);
    this.bouton2 = new Button("ROTATE", this.ctx, 40 * this.pixelRatio);
    this.setup();
  }

  setup() {
    /*  document.addEventListener(
      "DOMContentLoaded",
      function () {
        var button = document.createElement("button");
        button.type = "button";
        button.innerHTML = "Press me";
        button.className = "btn-styled";

        button.onclick = function () {};

        var container = document.getElementById("container");
        container.appendChild(button);
      },
      false
    );*/

    /*
    let buttonWidth = this.canvas.width / 5;
    for (let i = buttonWidth; i < this.canvas.width / 2; i += buttonWidth) {
      const bouton = new Button(
        "zoom",
        this.ctx,
        40 * this.pixelRatio,
        buttonWidth + i
      );

      this.boutons.push(bouton);
    }*/

    this.draw();
  }

  draw() {
    let x = this.canvas.width / 2;
    let y = this.canvas.height / 2;

    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate((1 / 3) * Math.PI);
    this.texte.draw(0, 0);
    this.ctx.restore();

    let yBouton = this.canvas.height - 200 * this.pixelRatio;

    let boutonWidth = this.canvas.width / 5;
    this.ctx.save();
    this.bouton1.drawButton(
      boutonWidth,
      yBouton,

      boutonWidth / 2,
      150,
      boutonWidth,
      this.pixelRatio
    );

    this.bouton2.drawButton(
      this.canvas.width / 2 + boutonWidth / 2,
      yBouton,

      boutonWidth / 2,
      150,
      boutonWidth,
      this.pixelRatio
    );

    this.ctx.restore();

    requestAnimationFrame(this.draw.bind(this));
  }
}

window.onload = function () {
  new App();
};
