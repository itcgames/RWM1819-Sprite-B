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

		this.sprite2 = new AnimatedSprite(this.assetManager.getAsset("scott.png"),
										  108, 
										  140, 
										  0, 
										  0, 
										  300, 
										  100, 
										  ctx);
		
										  //Create a new Animation passing a name, initial frame dimensions, and number of frames in the animation
		this.walkAnimation = new Animation("walk", 0, 0, 108, 140, 8);
		this.walkAnimation2 = new Animation("walk", 0, 0, 108, 140, 8);
		
		//Make the animation looped.
		this.walkAnimation.setLooped(true);
		this.walkAnimation2.setLooped(true);
		
		//Set the frame-rates of each animation
		this.walkAnimation.setFrameRate(60);
		this.walkAnimation2.setFrameRate(30);
		
		//Set the animation of the AnimatedSprite to be the 
		//walk animation that has been created.
		this.sprite1.setAnimation(this.walkAnimation);
		this.sprite2.setAnimation(this.walkAnimation2);
	
		this.update(this.ctx, this.canvas);
	}

	update(ctx, canvas)
	{
		
		console.log("Update called");
		
		//Call the playAnimation method of the animated sprite
		this.sprite1.playAnimation();
		this.sprite2.playAnimation();
		
		//Draw the animated sprite
		this.sprite1.draw();
		this.sprite2.draw();

		window.requestAnimationFrame(function() {
			game.update(ctx, canvas);
		});
	}

}