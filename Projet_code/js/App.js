const boutons = [];

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
    this.textBouton = ["zoom", "rotate"];
    this.setup();
  }

  setup() {
    this.ctx.fillStyle = "rgba(194,194,194,100)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    let boutonHeight = this.canvas.width / 5;
    let yBouton = this.canvas.height - this.canvas.width / 5;
    let buttonWidth = this.canvas.width / 2;
    for (let i = 0; i < 2; i++) {
      const bouton = new Button(
        this.ctx,
        this.textBouton[i],
        15 * this.pixelRatio,
        buttonWidth * i,
        buttonWidth,
        yBouton,
        boutonHeight
      );

      boutons.push(bouton);
    }

    /*
    document.addEventListener(
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
    this.draw();
    let x = this.canvas.width / 2;
    let y = this.canvas.height / 2;

    document.addEventListener("click", function (event) {
      for (let i = 0; i < boutons.length; i++) {
        boutons[i].changeColor(event.clientX, event.clientY, x, y);
      }
    });
  }

  draw() {
    let x = this.canvas.width / 2;
    let y = this.canvas.height / 2;

    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(1.25 * Math.PI);
    this.texte.draw(0, 0);
    this.ctx.restore();
    /*
    boutons.forEach((bouton) => {
      bouton.drawButton();
    });
*/
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
