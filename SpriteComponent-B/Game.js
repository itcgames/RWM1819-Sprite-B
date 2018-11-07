class Game
{
	constructor()
	{

	}

	init(ASSET_MANAGER, ctx, canvas) 
	{
		console.log("Game initialized");
		this.assetManager = ASSET_MANAGER;
		this.ctx = ctx;
		this.canvas = canvas;
		this.sprite1 = new Sprite(this.assetManager.getAsset("cirno.png"), 55, 85, 0, 14, 100, 100, this.ctx);
		this.update(this.ctx);
	}

	update(ctx, canvas)
	{
		console.log("Update called");
		this.sprite1.draw();
		window.requestAnimationFrame(function() {


			game.update(ctx, canvas);
		});
	}

}