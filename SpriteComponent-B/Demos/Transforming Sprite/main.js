
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
	var assetManager = new AssetManager();
	
	game = new Game();

	assetManager.queueDownload("cirno.png");
	
	assetManager.downloadAll(function() 
	{
		game.init(assetManager, ctx, canvas);
	});

}




