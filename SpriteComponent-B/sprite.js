function Sprite(src, width, height, frameLeft, frameTop, x, y,ctx)
{ 
   // this.src = src
    this.width = width;
    this.height = height;
    this.frameLeft = frameLeft;
    this.frameTop = frameTop;
    this.x = x;
    this.y = y;
    this.img = src;
    this.ctx = ctx;
   // this.img.src = this.src;
}

Sprite.prototype.loadImage = function()
{
    this.img.src = this.src;
}

Sprite.prototype.update = function()
{

}


Sprite.prototype.draw = function()
{
    this.ctx.drawImage(this.img, 
                       this.frameLeft, 
                       this.frameTop, 
                       this.width, 
                       this.height, 
                       this.x, 
                       this.y, 
                       this.width, 
                       this.height);
    //console.log("Draw sprite");
}

Sprite.prototype.setPosition = function(x, y)
{
    this.x = x;
    this.y = y;
}

Sprite.prototype.x = function()
{   
    return this.x;
}

Sprite.prototype.y = function()
{
    return this.y;
}

Sprite.prototype.width = function()
{
    return this.width;
}

Sprite.prototype.height = function()
{
    return this.height;
}

//Function to return the x and y position of the sprite.
Sprite.prototype.getPosition = function()
{
    return {x: this.x, y: this.y};
}


//Function to return the x, y, width and height for easy access in collisions.
//Usage: sprite.getGlobalBounds().x;
Sprite.prototype.getGlobalBounds = function()
{
    return {x: this.x, y: this.y, width: this.width, height: this.height};
}




