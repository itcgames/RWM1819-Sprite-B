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
										  ctx);
		
										  //Create a new Animation passing a name, initial frame dimensions, and number of frames in the animation
		this.walkAnimation = new Animation("walk", 0, 0, 108, 140, 8);
		
		//Make the animation looped.
		this.walkAnimation.setLooped(true);
		
		//Set the animation of the AnimatedSprite to be the 
		//walk animation that has been created.
		this.sprite1.setAnimation(this.walkAnimation);
	
		this.update(this.ctx, this.canvas);
	}

	update(ctx, canvas)
	{
		
		console.log("Update called");
		//Call the playAnimation method of the animated sprite
		this.sprite1.playAnimation();
		//Draw the animated sprite
		this.sprite1.draw();

		window.requestAnimationFrame(function() {
			game.update(ctx, canvas);
		});
	}

}