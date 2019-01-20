class Animation
{
    /**
     * Constructor
     * @param {*} animationName name of the animation
     * @param {*} frameLeft Left-most position of the initial frame
     * @param {*} frameTop Top-most position of the initial frame
     * @param {*} frameWidth Width of each frame
     * @param {*} frameHeight Height of each frame
     * @param {*} numFrames number of frames in the animation
     */
    constructor(animationName, frameLeft, frameTop, frameWidth, frameHeight, numFrames)
    {
        this.animationName = animationName;
        this.frameLeft = frameLeft;
        this.frameTop = frameTop;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.numFrames = numFrames;
        this.looped = false;
        this.initialFrameLeft = frameLeft;
        this.frameCount = 0;
    }

    play()
    {
        this.frameCount = 0;

        if(this.looped === false)
        {
            while(this.frameCount <= this.numFrames - 1)
            {
                this.frameLeft += frameWidth;
                this.frameCount++;
            }
        }


        else if(this.looped === true)
        {
            this.frameLeft += this.frameWidth;

            //Loop back around to the first frame
            if(this.frameLeft + this.frameWidth >= this.frameWidth * this.numFrames)
            {
                this.frameLeft = this.initialFrameLeft;
            }
        }
    }

    /**
     * Set whether or not the animation should be looped
     * @param {*} looped: boolean to loop the animation 
     */
    setLooped(looped)
    {
        this.looped = looped;
    }

    getFrame()
    {
        return{ left: this.frameLeft, top: this.frameTop, width: this.frameWidth, height: this.frameHeight}
    }

}