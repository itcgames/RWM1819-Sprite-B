
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
	
	game = new Game();

	ASSET_MANAGER.queueDownload("cirno.png");
	ASSET_MANAGER.queueDownload("scott.png");
	
	ASSET_MANAGER.downloadAll(function() 
	{
		game.init(ASSET_MANAGER, ctx, canvas);
	});

	//game = new Game(ASSET_MANAGER, ctx);

	//game.update(ctx, canvas);
	//mySprite.draw(ctx);
}




