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
    }

    draw()
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
    }
    
    setPosition(x, y)
    {
        this.x = x;
        this.y = y;
    }

    getGlobalBounds()
    {
        return {x: this.x, y: this.y, width: this.width, height: this.height};
    }
}





