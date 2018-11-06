function Game(ASSET_MANAGER, ctx)
{
	this.assetManager = ASSET_MANAGER;
	this.ctx = ctx;
	this.sprite1 = new Sprite(this.assetManager.getAsset("cirno.png"), 55, 85, 0, 14, 100, 100, this.ctx);

}

Game.prototype.init = function(ctx) 
{
	console.log("Game initialized");
}

Game.prototype.update = function(ctx, canvas)
{
	console.log("update called");
	this.sprite1.draw();
	window.requestAnimationFrame(function() {


		game.update(ctx, canvas);
	});
}