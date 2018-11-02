var game;

function main()
{
	console.log("Sprite manager");

	var ctx;
	var canvas;
	//creates a new canvas element
	canvas = document.createElement("canvas");
	document.body.appendChild(canvas);
	//declare canvas size
	canvas.width = 1920;
	canvas.height = 1080;
	
	ctx = canvas.getContext("2d");
	
	//One global ASSET_MANAGER
	var ASSET_MANAGER = new AssetManager();

	ASSET_MANAGER.queueDownload("cirno.png");
	
	
	
	ASSET_MANAGER.downloadAll(function() 
	{

	});

	game = new Game(ASSET_MANAGER, ctx);

	game.update(ctx, canvas);
	//mySprite.draw(ctx);
}




