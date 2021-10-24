window.onload = function(){
    
    // 게임상태 로직
    let isStart;               
    function gameStartEnd(){    
        return isStart          
    }
    //게임상태 로직 끝

    // 상수 변수 
    const movingButton = document.getElementById("catch");  // 버튼 input
    
    const count = document.getElementById("countReturn")    // 카운터 html
    let c; //카운터 변수

    const timerReturn = document.getElementById("timerReturn"); //타이머 html
    let t;  // 타이머 변수
    let timer;  // setInterval(function(){})를 담을거임  clearInterval 시발놈 이거때매 알게됨 

    const nameArea = document.getElementById("nameArea"); 
    let playerName;
    // 상수 변수 끝

    //초기화 로직 
    function initialize(){
        isStart = false;                                // 게임 시작전으로

        c = 0;                                          // 카운터 변수 리셋
        count.innerHTML = "focus on!";                  // 카운터 html 리셋

        clearInterval(timer);                           // 타이머 정지
        t = 0;                                          // 타이머 변수 리셋
        timerReturn.innerHTML = "↓ ↓ ↓";                // 타이머 html 리셋
        
        movingButton.style.gridArea = 'click' + 12;      // 버튼 원위치 리셋
    }
    //초기화 로직 끝

     //사용자 이름 받아오기 로직 
    function getName(){
        playerName = prompt("당신의 이름을 적어주세요!",);          // 이름값 받는 prompt
        
        while(playerName === "" || playerName === null){  //받은 값이 빈 문자열이거나 null 이면
            playerName = prompt("좋은 말 할 때 적어주세요^^",);                   // prompt 무한 실행
        }
        nameArea.innerHTML = "hello!  " + playerName; 
    }
     //사용자 이름 받아오기 로직 끝 
    
    //버튼 클릭 로직 
    function buttonClick(){
        c += 1;  // 매 회 클릭마다 카운터 변수는 조건없이 바로 +1

        if(!gameStartEnd() || (gameStartEnd() && c < 10)){ // 시작전이거나 , 진행중이면서 카운트가 10 이하면      -- 게임set의 기준을 바꾸려면 이것 숫자를 바꿔야함
            if(!gameStartEnd()){    // 시작전이면 
                timer = setInterval(function(){  // 타이머!!
                timerReturn.innerHTML = t/100;    
                t += 1 ;
                },10)
            
                isStart = true;   // 게임 진행중으로
            }
            movingButton.style.gridArea = 'click'+ Math.round((Math.random()*24));  //첫 버튼 움직임!!    

            count.innerHTML = c + "/10" ;  //카운터 1        -- 게임set의 기준을 바꾸려면 이것 숫자를 바꿔야함

            window.navigator.vibrate(150);  // 쮜이이이잉~
        }
        else{
            result();
            initialize();
        }
    }
    //버튼 클릭 로직 끝

    //결과창 로직
    function result(){
        let grade = timerReturn.innerHTML;

        const baseNotice = "당신의 기록은 " + grade + "s 입니다. \n" 

        function rankMsg(notice){
            alert(baseNotice + notice);
        }
    
        if(grade < 3.0){
            rankMsg("GOD " + playerName);
        }
        else if(grade < 4.0){
            rankMsg("마지못해 인정합니다^^");
        }
        else if(grade < 5.0){
            rankMsg("딱 평균만큼만 하시게요? ^^");  
        }
        else if(grade < 6.0){
            rankMsg("게이머 평균은 4초대 입니다^^");
        }
        else if(grade < 7.0){
            rankMsg("저희 집 강아지 온유도 6초는 합니다^^");
        }
        else{  // 나머지 7초 이상
            rankMsg("당신의 기록... 착잡한 심정입니다...");
        }
    
       // switch(Math.floor(grade)){
       //     case 2.0 :
       //     case 1.0 :
       //     case 0.0 : rankMsg("GOD " + playerName);
       //     break;
       //     case 3.0 : rankMsg("마지못해 인정합니다^^");
       //     break;
       //     case 4.0 :  rankMsg("딱 평균만큼만 하시게요? ^^");  
       //     break;
       //     case 5.0 :  rankMsg("게이머 평균은 4초대 입니다^^");
       //     break;
       //     case 6.0 :  rankMsg("저희 집 강아지 온유도 6초는 합니다^^");
       //     break;
       //     default : rankMsg("당신의 기록... 착잡한 심정입니다...");
       // 
    }
    //결과창 로직 끝

    //실행
    initialize(); // 초기화하고 
    getName();   // 이름을 받아오고 
    movingButton.addEventListener('click' , buttonClick);   // 버튼 클릭과 함께 게임을 시작함
    //실행 끝
}

