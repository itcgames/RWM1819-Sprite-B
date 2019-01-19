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

		//Create an AnimatedSprite object and play its animation.

		//this.sprite1 = new Sprite(this.assetManager.getAsset("cirno.png"), 64, 79, 0, 14, 100, 100, this.ctx);
		this.sprite1 = new AnimatedSprite(this.assetManager.getAsset("cirno.png"),
										  64, 
										  79, 
										  0, 
										  14, 
										  100, 
										  100, 
										  6, 
										  ctx);
	

		
		this.update(this.ctx, this.canvas);
	}

	update(ctx, canvas)
	{
		console.log("Update called");
		this.sprite1.playAnimation();
		this.sprite1.draw();
		window.requestAnimationFrame(function() {


			game.update(ctx, canvas);
		});
	}

}