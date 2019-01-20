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
		this.frameRate = 60;

		//Create an AnimatedSprite object and play its animation.
		this.sprite1 = new AnimatedSprite(this.assetManager.getAsset("scott.png"),
										  108, 
										  140, 
										  0, 
										  0, 
										  100, 
										  100, 
										  8, 
										  ctx);
		this.walkAnimation = new Animation("walk", 0, 0, 108, 140, 8);
		this.walkAnimation.setLooped(true);
		this.sprite1.setAnimation(this.walkAnimation);
	

		
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