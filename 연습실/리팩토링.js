window.onload = function(){
    var game = 0;             //  0 , 1 표현 예정
    function gameStartEnd(){  // 시작전 , 진행중 판별 불리언값 리턴
        if(game == 0){
            return false;
        }
        else{
            return true;
        }
    }

    const movingButton = document.getElementById("catch");  // 버튼 input

    const timerReturn = document.getElementById("timerReturn"); //타이머 h1
    var t = 0;

    const count = document.getElementById("countReturn")    // 카운터 h1
    var c = 0;
    
    function buttonClick(){
        if(gameStartEnd() == false){ //시작전이면
            game = 1;       // 1==true 진행중으로 바꿔
            movingButton.style.gridArea = 'click'+ Math.round((Math.random()*24));  //첫 버튼 움직임!! 
            
            setInterval(function(){  // 타이머!!
                timerReturn.innerHTML = t/10;    
                t += 1 ;
                },100)

            c += 1;               //카운터
            count.innerHTML = c + "/10" ; 
        }
        else if(gameStartEnd() == true) {  //진행중이면
            movingButton.style.gridArea = 'click'+ Math.round((Math.random()*24));  //이후 버튼 움직임
            c += 1;
            count.innerHTML = c + "/10" ;  //카운터 2~10
        }
    }
    movingButton.addEventListener('click' , buttonClick);   // 버튼을 클릭하면 buttonClick 함수 실행
   
}

    //function gameReset(){
    //    if(c == 10){
    //        timer = clearInterval(timer);
    //        alert("your record --> " + timerReturn.innerHTML + "s");
    //        game = 0;
    //        c = 0;
    //        timerReturn.innerHTML = "↓ ↓ ↓"
    //        count.innerHTML = "focus on!"
    //    }
    //}