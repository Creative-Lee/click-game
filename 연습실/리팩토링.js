window.onload = function(){
    var isStart;                //  게임상태 변수
    function gameStartEnd(){    //  게임상태에 따라 불리언 값 리턴
        return isStart          
    }

    const movingButton = document.getElementById("catch");  // 버튼 input
    
    const count = document.getElementById("countReturn")    // 카운터 html
    var c; //카운터 변수

    const timerReturn = document.getElementById("timerReturn"); //타이머 html
    var t;  // 타이머 변수
    var timer;  // setInterval(function(){})를 담을거임  clearInterval 시발놈 이거때매 알게됨 

    function initialize(){
        isStart = false;                                // 게임 시작전으로

        c = 0;                                          // 카운터 변수 리셋
        count.innerHTML = "focus on!";                  // 카운터 html 리셋

        clearInterval(timer);                           // 타이머 정지
        t = 0;                                          // 타이머 변수 리셋
        timerReturn.innerHTML = "↓ ↓ ↓";                // 타이머 html 리셋
        
        movingButton.style.gridArea = 'click' + 12;      // 버튼 원위치 리셋
    }
    
    function buttonClick(){
        c += 1;  // 매 회 클릭마다 카운터 변수는 조건없이 바로 +1
        if(!gameStartEnd()){ // 시작전이면
            isStart = true;   // 게임 진행중으로
            movingButton.style.gridArea = 'click'+ Math.round((Math.random()*24));  //첫 버튼 움직임!!    

            timer = setInterval(function(){  // 타이머!!
                timerReturn.innerHTML = t/100;    
                t += 1 ;
                },10)

            count.innerHTML = c + "/10" ;  //카운터 1        -- 게임set의 기준을 바꾸려면 이것 숫자를 바꿔야함
        }
        else if(gameStartEnd() && c < 10) {  //진행중이면 and 카운터가 10까지   -- 게임set의 기준을 바꾸려면 이것 비교 연산자(<) 우항 숫자를 바꿔야함
            movingButton.style.gridArea = 'click'+ Math.round((Math.random()*24));  //버튼 움직임 2~10

            count.innerHTML = c + "/10" ;  //카운터 2~10    -- 게임set의 기준을 바꾸려면 이것 숫자를 바꿔야함
        }
        else if(gameStartEnd() && c == 10){  //진행중이면 and 카운터가 10에 도달했을 때  -- 게임set의 기준을 바꾸려면 이것 동등연산자(==) 우항 숫자를 바꿔야함

            alert("당신의 기록은 " + timerReturn.innerHTML + "s 입니다. \n아직 멀었군요^^");  //타이머 멈춘 시점  알람 출력
            initialize();
        }
    }

    function getName(){
        const nameArea = document.getElementById("nameArea");                       // 이름 html
        nameArea.innerHTML =  "hello!  " + prompt("당신의 이름을 적어주세요!",);      // 이름값 받는 prompt
    }



    initialize();
    getName();
    movingButton.addEventListener('click' , buttonClick);   // 버튼을 클릭하면 buttonClick 함수 실행
    
}
