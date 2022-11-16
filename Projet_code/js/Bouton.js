class Button {
  constructor(ctx, text, size, x, width) {
    this.text = text;
    this.ctx = ctx;
    this.size = size;
    this.x = x;
    this.width = width;
  }

  drawButton(y, height) {
    this.ctx.fillStyle = "rgba(0,0,0, 0)";
    this.ctx.fillRect(this.x, y, this.width, height);

    this.ctx.save();
    this.ctx.fillStyle = "black";
    this.ctx.strokeStyle = "black";
    this.ctx.font = `` + this.size + `pt Garaje`;
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.fillText(this.text, this.x + this.width / 2, y + height / 2);
    this.ctx.restore();
  }
}
