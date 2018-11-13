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

		//Create 3 Sprite object, and demonstrate the transformation abilities of each.

		this.sprite1 = new Sprite(this.assetManager.getAsset("cirno.png"), 64, 85, 0, 14, 100, 100, this.ctx);
		this.sprite1.setScale(2.0, 2.0); // Scale by 2 times

		this.sprite2 = new Sprite(this.assetManager.getAsset("cirno.png"), 64, 85, 0, 14, 300, 100, this.ctx);
		this.sprite2.setRotation(90); //Rotate by 90 degrees

		this.sprite3 = new Sprite(this.assetManager.getAsset("cirno.png"), 64, 85, 0, 14, 500, 100, this.ctx);
		this.sprite3.setPosition(500, 200); //Change position
		
		this.update(this.ctx, this.canvas);
	}

	update(ctx, canvas)
	{
		console.log("Update called");
		this.sprite1.draw();
		this.sprite2.draw();
		this.sprite3.draw();
		window.requestAnimationFrame(function() {


			game.update(ctx, canvas);
		});
	}

}