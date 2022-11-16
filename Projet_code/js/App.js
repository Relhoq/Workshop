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
    this.textBouton = ["zoom", "rotate"];
    //this.bouton1 = new Button(this.ctx, "ZOOM", 20 * this.pixelRatio);
    //this.bouton2 = new Button(this.ctx, "ROTATE", 20 * this.pixelRatio);
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

    let buttonWidth = this.canvas.width / 2;
    for (let i = 0; i < 2; i++) {
      const bouton = new Button(
        this.ctx,
        this.textBouton[i],
        15 * this.pixelRatio,
        buttonWidth * i,
        buttonWidth
      );

      this.boutons.push(bouton);
    }

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

    let boutonHeight = this.canvas.width / 5;
    let yBouton = this.canvas.height - this.canvas.width / 5;
    this.boutons.forEach((bouton) => {
      bouton.drawButton(yBouton, boutonHeight);
    });

    /*
    let boutonWidth = this.canvas.width / 5;
    
  
    this.ctx.save();
    this.bouton1.drawButton(boutonWidth, yBouton, boutonWidth, boutonHeight);

    this.bouton2.drawButton(
      this.canvas.width / 2 + boutonWidth / 2,
      yBouton,
      boutonWidth,
      boutonHeight
    );

    this.ctx.restore();
*/
    requestAnimationFrame(this.draw.bind(this));
  }
}

window.onload = function () {
  new App();
};
