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
        this.tickCount = 0;
        this.frameRate = 60;
    }


    //Animation play method to be called during the update loop
    play()
    {
        //increment the tick count once every update.
        this.tickCount += 1;
        //If the tickcount is higher than our frame interval (16.7ms by default)
        if(this.tickCount > 1000 / this.frameRate)
        {
            if(this.looped === false)
            {
                if(this.frameCount <= this.numFrames - 1)
                {
                    this.frameLeft += this.frameWidth;
                    this.frameCount += 1;
                }

                if(this.frameCount >= numFrames)
                {
                    this.frameCount = 0;
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
            this.tickCount = 0;
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

    /**
     * 
     * @param {*} frameRate: Number of frames per second the animation should be played at.
     */
    setFrameRate(frameRate)
    {
        this.frameRate = frameRate;
    }

}