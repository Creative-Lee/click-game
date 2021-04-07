window.onload = function(){
    var game = 0;             //  0 , 1 표현
    function gameStartEnd(){  // 시작전 , 진행중 판별 불리언값 리턴
        if(game == 0){
            return false;
        }
        else{
            return true;
        }
    }

    const movingButton = document.getElementById("catch");  // 버튼 input

    const timerReturn = document.getElementById("timerReturn"); //타이머 html
    var t = 0;  // 타이머 변수
    var timer;  // 타이머 익명함수를 위한 변수선언 ※ timer 변수에다가 밑에 나올 setInterval(function(){})를 담을거임  clearInterval 시발놈 이거때매 알게됨 

    const count = document.getElementById("countReturn")    // 카운터 html
    var c = 0; //카운터 변수

    function buttonClick(){
        c += 1;  // 매 회 클릭마다 카운터 변수는 조건없이 바로 +1
        if(gameStartEnd() == false){ // 시작전이면
            game = 1;   // 게임 진행중으로
            movingButton.style.gridArea = 'click'+ Math.round((Math.random()*24));  //첫 버튼 움직임!!    

            timer = setInterval(function(){  // 타이머!!
                timerReturn.innerHTML = t/10;    
                t += 1 ;
                },100)

            count.innerHTML = c + "/10" ;  //카운터 1        -- 게임set의 기준을 바꾸려면 이것 숫자를 바꿔야함
        }
        else if(gameStartEnd() == true && c < 10) {  //진행중이면 and 카운터가 10까지   -- 게임set의 기준을 바꾸려면 이것 비교 연산자(<) 우항 숫자를 바꿔야함
            movingButton.style.gridArea = 'click'+ Math.round((Math.random()*24));  //버튼 움직임 2~10

            count.innerHTML = c + "/10" ;  //카운터 2~10    -- 게임set의 기준을 바꾸려면 이것 숫자를 바꿔야함
        }
        else if(gameStartEnd() == true && c == 10){  //진행중이면 and 카운터가 10에 도달했을 때  -- 게임set의 기준을 바꾸려면 이것 동등연산자(==) 우항 숫자를 바꿔야함

            alert("your record --> " + timerReturn.innerHTML + "s");  //타이머 멈춘 시점  알람 출력

            game = 0;                                       // 게임 시작전으로

            c = 0;                                          // 카운터 변수 리셋
            count.innerHTML = "focus on!";                  // 카운터 html 리셋

            clearInterval(timer);                           // 타이머 정지
            t = 0;                                          // 타이머 변수 리셋
            timerReturn.innerHTML = "↓ ↓ ↓";                // 타이머 html 리셋
            
            movingButton.style.gridArea = 'click' + 12;  // 버튼 원위치 리셋
        }
    }
    //const nameArea = document.getElementById("nameArea")
    //nameArea.innerHTML =  prompt("당신의 이름을 적어주세요!",)
    movingButton.addEventListener('click' , buttonClick);   // 버튼을 클릭하면 buttonClick 함수 실행
    
}
