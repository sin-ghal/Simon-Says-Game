let gameseq=[];
let userseq=[];

let started=false;
let level=0;
let btns=['yellow','red','green','blue'];

let h2=document.querySelector('h2');
document.addEventListener('keypress',function(){

    if(started==false)
    {
        started=true;
        levelup();
    }

})
function flashbtn(btn){
    btn.classList.add('flash');
    setTimeout(function() {
    btn.classList.remove('flash')},250);
}
function randgamecol(){
    let randidx=Math.floor(Math.random()*4);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`)
    return randbtn;

}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randidx=Math.floor(Math.random()*4);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`)

    flashbtn(randbtn);
    gameseq.push(randbtn.innerText);
    console.log(gameseq);
    
     
}

function btnpress(){
    let btn=this;
    
    userseq.push(btn.innerText)
    flashbtn(btn);
    check(userseq.length-1);
}

let allbtns=document.querySelectorAll('.box');

for (let i = 0; i < allbtns.length; i++) {
    allbtns[i].addEventListener('click', btnpress);
}

function check(idx){

    
     if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length)
        {
            setTimeout(levelup,1000);
        }
     }
     else{
        h2.innerText="game over !! press any key to start again";
        let bg=document.querySelector('body');
        bg.style.backgroundColor='red'
        setTimeout(() => {
            bg.style.backgroundColor='rgb(171, 210, 244)';
        }, 200);
        document.querySelector('#h').innerText=`Your Score - ${level}`;

        reset();
        

    }
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
