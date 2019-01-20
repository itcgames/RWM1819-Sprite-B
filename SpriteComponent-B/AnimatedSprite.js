//Object for animated sprites that inherits from the Sprite class.
class AnimatedSprite extends Sprite
{
    /**
     * 
     * @param {*} src: Source of the asset
     * @param {*} width: width of a frame
     * @param {*} height: height of a frame 
     * @param {*} frameLeft: position of the left-most frame
     * @param {*} frameTop: position of the top of the frame
     * @param {*} x: Position of the sprite on the x plane
     * @param {*} y: Position of the sprite on the y plane
     * @param {*} numFrames: number of frames in the animation
     * @param {*} ctx: reference to the drawing context
     */
    constructor(src, width, height, frameLeft, frameTop, x, y, ctx)
    {
        //Make call to the Sprite constructor
        super(src, width, height, frameLeft, frameTop, x, y, ctx);

        //Store the original frame for looping the animation
        this.originalFrame = this.frameLeft;

        //Default values of 1 for scale.
        this.scaleX = 1.0;
        this.scaleY = 1.0;

        //Get the scaled width and height on construction to initialize them
        this.scaledWidth = this.width * this.scaleX
        this.scaledHeight = this.height * this.scaleY;

        //rotation angle in degrees
        this.rotationAngle = 0;
    
        //Default value of 30 fps for animations.
        this.frameRate = 30;
        this.animation;
    }

    //Function to play the animation, called in an update loop.
    playAnimation()
    {   
        this.animation.play();
        this.frameLeft = this.animation.getFrame().left;
        this.frameTop = this.animation.getFrame().top;
    }

    /**
     * Function to set the animated sprite's animation
     * @param {*} animation: Animation object
     */
    setAnimation(animation)
    {
        this.animation = animation;
    }

    
}