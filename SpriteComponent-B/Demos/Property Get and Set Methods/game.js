class Game
{
	constructor()
	{

	}

	init(assetManager, ctx, canvas) 
	{
		console.log("Game initialized");
		this.assetManager = assetManager;
		this.ctx = ctx;
		this.canvas = canvas;

		//Create a sprite object, use methods to set properties of the sprite:

		this.sprite1 = new Sprite(this.assetManager.getAsset("cirno.png"), 64, 85, 0, 14, 100, 100, this.ctx);
		this.sprite1.setScale(2.0, 2.0); // Scale by 2 times
		this.sprite1.setPosition(500, 200);		
		
		this.update(this.ctx, this.canvas);
	}

	update(ctx, canvas)
	{
		console.log("Update called");
		this.sprite1.draw();

		//Use sprite.getGlobalBounds() to get each value after transformations have been applied:

		console.log("X: " + this.sprite1.getGlobalBounds().x);
		console.log("Y: " + this.sprite1.getGlobalBounds().y);
		console.log("Height: " + this.sprite1.getGlobalBounds().height);
		console.log("Width: " + this.sprite1.getGlobalBounds().width);

		window.requestAnimationFrame(function() {


			game.update(ctx, canvas);
		});
	}

}