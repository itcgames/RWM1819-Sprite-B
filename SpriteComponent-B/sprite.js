/**
 * 
 * @param {*} src: source from asset loader 
 * @param {*} width: width in pixels
 * @param {*} height: height in pixels
 * @param {*} frameLeft: Left-most pixel of a frame/image
 * @param {*} frameTop: Right-most pixel of a frame/image
 * @param {*} x: The x position
 * @param {*} y: The y position
 * @param {*} ctx: Context object
 */
class Sprite
{ 
    constructor(src, width, height, frameLeft, frameTop, x, y, ctx)
    {
        this.width = width;
        this.height = height;
        this.frameLeft = frameLeft;
        this.frameTop = frameTop;
        this.x = x;
        this.y = y;
        this.img = src;
        this.ctx = ctx;

        //Default values of 1 for scale.
        this.scaleX = 1.0;
        this.scaleY = 1.0;

        //Get the scaled width and height on construction to initialize them
        this.scaledWidth = this.width * this.scaleX
        this.scaledHeight = this.height * this.scaleY;

        //rotation angle in degrees
        this.rotationAngle = 0;
    }



    /**
     * Sprite draw function
     */
    draw()
    {
        
        this.scaledWidth = this.width * this.scaleX;
        this.scaledHeight = this.height * this.scaleY;

        this.ctx.save();
        this.ctx.translate(this.x + this.scaledWidth / 2, this.y + this.scaledHeight / 2);
        this.ctx.rotate(this.rotationAngle * (Math.PI / 180));
        this.ctx.translate(-(this.x + this.scaledWidth / 2), -(this.y + this.scaledHeight / 2));
        this.ctx.drawImage(this.img, 
                            this.frameLeft, 
                            this.frameTop, 
                            this.width, 
                            this.height, 
                            this.x, 
                            this.y, 
                            this.scaledWidth, 
                            this.scaledHeight);
        this.ctx.restore();
    }
    
    /**
     * Position setter
     * @param {*} x X Position you want the sprite to be set to
     * @param {*} y Y Position you want the sprite to be set to
     */
    setPosition(x, y)
    {
        this.x = x;
        this.y = y;
    }

    /**
     * Position offset method
     * @param {*} x Amount you want to offset the X position by
     * @param {*} y Amount you want to offset the Y position by
     */
    move(x, y)
    {
        this.x += x;
        this.y += y;
    }
    /**
     * Method to offset the rotation angle
     * @param {*} angle Angle in degrees you want to offset by
     */
    rotate(angle)
    {
        this.rotationAngle += angle;
    }
    
    /**
     * Set the amount you want the sprite to be scaled by when drawn
     * @param {*} x Amount to scale in the X direction
     * @param {*} y Amount to scale in the Y direction
     */
    setScale(x, y)
    {
        this.scaleX = x;
        this.scaleY = y;
    }

    /**
     * Set the angle of rotation of the sprite.
     * @param {*} angle Angle in degrees you want the sprite to be offset by;
     */
    setRotation(angle)
    {
        this.rotationAngle = angle;
    }

    /**
     * Returns the global bounds of the sprite after transform has been applied
     */
    getGlobalBounds()
    {
        return {x: this.x, y: this.y, width: this.scaledWidth, height: this.scaledHeight};
    }
}





