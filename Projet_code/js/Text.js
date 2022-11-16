class Text {
  constructor(ctx, text, size) {
    this.text = text;
    this.ctx = ctx;
    this.size = size;
  }

  draw(x, y) {
    this.ctx.fillStyle = "rgb(0,255,0";
    this.ctx.strokeStyle = "white";
    this.ctx.font = `` + this.size + `pt Garaje`;
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.fillText(this.text, x, y);
  }
}
