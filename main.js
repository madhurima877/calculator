const calculator=document.querySelector('.calculator');
const screen= document.querySelector('.screen');
calculator.addEventListener('click',(e)=>{
    // console.log(e.target.innerText);
    if(!e.target.classList.contains('button')){
      return;
    }
    switch(e.target.innerText){
        case 'AC':
            screen.innerText="";
            break;
        case '=':
            screen.innerText=eval(screen.innerText);
            break;
        default:
            screen.innerText+=e.target.innerText;
    }
})