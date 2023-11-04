const SPEED=.01;
export default class Paddle{
    constructor(paddleElem)
    {
        this.paddleElem = paddleElem;
        this.reset();
    }
    get pos(){
       return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--pos"))
    }
    set pos(value)
    {
        //console.log("set")
       // console.log(value);
        this.paddleElem.style.setProperty("--pos", value);
    }
    rect()
    {
        return this.paddleElem.getBoundingClientRect();
    }
    reset()
    {
        this.pos=50;
    }
    update(delta,ballHeight)
    {
        this.pos+=SPEED*delta*(ballHeight-this.pos)
    }
}