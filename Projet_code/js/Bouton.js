class Button {
  constructor(text, ctx, size) {
    this.text = text;
    this.ctx = ctx;
    this.size = size;

    this.height = 300;
  }

  drawButton(x, y, xText, yText, width, pixelRatio) {
    this.ctx.strokeRect(x, y, width, this.height * pixelRatio);

    this.ctx.save();
    this.ctx.fillStyle = "black";
    this.ctx.strokeStyle = "black";
    this.ctx.font = `` + this.size + `pt Garaje`;
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.fillText(this.text, x + xText, y + yText);
    this.ctx.restore();
  }
}
