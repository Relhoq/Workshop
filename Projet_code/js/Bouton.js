class Button {
  constructor(ctx, text, size, x, width, y, height) {
    this.text = text;
    this.ctx = ctx;
    this.size = size;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.fillStyle = this.ctx.fillStyle = "rgba(0,0,0, 0)";
  }

  drawButton() {
    this.fillStyle = this.fillStyle;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    this.ctx.save();
    this.ctx.fillStyle = "white";
    this.ctx.strokeStyle = "black";
    this.ctx.font = `` + this.size + `pt Garaje`;
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.fillText(
      this.text,
      this.x + this.width / 2,
      this.y + this.height / 2
    );
    this.ctx.restore();
  }

  changeColor(mouseX, mouseY, x, y) {
    if (mouseX > this.x && mouseX < this.x + this.width) {
      if (mouseY > this.y && mouseY < this.y + this.height) {
        // this.fillStyle = this.ctx.fillStyle = "rgba(150,150,150,100)";

        const popUp = new PopUp(this.ctx);

        popUp.drawPopUp(x, y);
      }
    }
  }
}
