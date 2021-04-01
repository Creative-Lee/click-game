window.onload = function(){                                       
    const clickButton = document.getElementById("catch");         
    clickButton.addEventListener("click" , function(){                 
        clickButton.style.backgroundColor =  'pink';
        clickButton.style.position =  'static' ;
        clickButton.value = 'click fast!'
        clickButton.style.gridArea = 'click'+ Math.round((Math.random()*24));
    });

    const score = document.getElementById("score");
    let clickCounter = 0;
    clickButton.addEventListener('click' , function(){
        clickCounter += 1;
        score.innerHTML = 'go fast! →  '+clickCounter+'/'+25;
    });

    const timer = document.getElementById("timer"); 
    let timeStart = 0;
    clickButton.addEventListener("focus", function(){
       var ss = setInterval(function(){
            if(score.innerHTML == 'go fast! →  '+25+'/'+25){
                clearInterval(ss);
                alert('game over!\n your record is ['+timeStart/100+'] seconds!')
            }
            timer.innerHTML ='Time is gold! →  ' + timeStart/100+'s';
            timeStart += 1;    
            }, 10);    
    });

    var getName =  prompt("사용자 이름을 적어주세요!",);
    var userName =  document.getElementById("nameArea");
    userName.innerHTML = 'hello! '+getName ;
 }
