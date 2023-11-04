import Ball from "./ball.js"
import Paddle from "./paddle.js";
const ball=new Ball(document.getElementById("ball"));
const playerpaddle=new Paddle(document.getElementById("player-paddle"));
const computerPaddle=new Paddle(document.getElementById("computer-paddle"))
const playerScore=document.getElementById("player-score")
const computerScore=document.getElementById("computer-score");
//alert("hii")
console.log("hii")
let lastTime;
function update(time)
{
    if(lastTime !=null){
        const delta=time-lastTime//delta is for calculating time b/w adjacent frames when there is a frame change occurs
       ball.update(delta,[playerpaddle.rect(),computerPaddle.rect()]);
       // console.log(ball.y);
        computerPaddle.update(delta,ball.y);
        if(isLose())
        {
                handleLose();
        }
    }
   
    lastTime=time
    window.requestAnimationFrame(update);
}
function isLose(){
    const rect=ball.rect();
    return rect.right >=window.innerWidth|| rect.left<=0
    
}
function handleLose()
{
    const rect=ball.rect();
    if(rect.right >= window.innerWidth)
    {
        playerScore.textContent=parseInt(playerScore.textContent)+1;
    }
    else
    {
        computerScore.textContent=parseInt(computerScore.textContent)+1;
    }
    ball.reset();
    computerPaddle.reset();
}

window.requestAnimationFrame(update);
document.addEventListener("mousemove",e=>{
    //console.log("hii from listener")
    //console.log(e.y);
    playerpaddle.pos=(e.y/window.innerHeight)*100;
   // console.log(playerpaddle.pos)
})