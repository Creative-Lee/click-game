window.onload = function(){                                       
    const clickButton = document.getElementById("catch");         
    clickButton.addEventListener("click" , function(){                 
        clickButton.style.backgroundColor =  'pink';
        clickButton.style.position =  'static' ;                        
        clickButton.style.gridArea = 'click'+ Math.round((Math.random()*25));
        
    })
    let clickCounter = 0;
    const score = document.getElementById("score");
    clickButton.addEventListener('click' , function(){
        clickCounter += 1;
        score.innerHTML = clickCounter;
    })
}
