class PopUp {
  constructor(ctx) {
    this.ctx = ctx;
  }

  drawPopUp(x, y) {
    this.ctx.save();
    this.ctx.translate(0, 0);
    this.ctx.fillStyle = "White";
    this.ctx.fillRect(x - x / 2, y / 2, 100, 100);
    this.ctx.restore();
  }
}
