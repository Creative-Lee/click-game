window.onload = function(){                                       
    const clickButton = document.getElementById("catch");         
    clickButton.addEventListener("click" , function(){                 
        clickButton.style.backgroundColor =  'pink';
        clickButton.style.position =  'static' ;
        clickButton.style.width = "100px"
        clickButton.style.height = "100px"                      
        clickButton.value = 'click fast!'
        clickButton.style.gridArea = 'click'+ Math.round((Math.random()*24));
    })

    const score = document.getElementById("score");
    let clickCounter = 0;
    clickButton.addEventListener('click' , function(){
        clickCounter += 1;
        score.innerHTML = 'go fast! →  '+clickCounter+'/'+5;
    })

    const timer = document.getElementById("timer");
    let timeStart = 0;
    clickButton.addEventListener("click", function(){
       var ss = setInterval(function(){
            if(score.innerHTML == 'go fast! →  '+5+'/'+5){
                clearInterval(ss);
                alert('game over!'+'<br>'+'your record is '+timeStart/10+'seconds!')
            }
            timer.innerHTML ='time is gold! →  ' + timeStart/10+'s';
            timeStart += 1;    
            }, 100)    
    });
}

