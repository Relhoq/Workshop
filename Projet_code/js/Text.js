class Text {
  constructor(ctx, text, size) {
    this.text = text;
    this.ctx = ctx;
    this.size = size;
  }

  drawText(x, y) {
    this.ctx.fillStyle = "black";
    this.ctx.strokeStyle = "black";
    //this.ctx.strokeRect(this.x, this.y, this.x1 / 3, this.y1 / 3);
    this.ctx.font = `` + this.size + `px Garaje`;
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";

    this.ctx.fillText(this.text, x, y);
  }
}
