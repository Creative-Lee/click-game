window.onload = function(){

    let isStart;                //  게임상태 변수
    function gameStartEnd(){    //  게임상태에 따라 불리언 값 리턴
        return isStart          
    }

    const movingButton = document.getElementById("catch");  // 버튼 input
    
    const count = document.getElementById("countReturn")    // 카운터 html
    let c; //카운터 변수

    const timerReturn = document.getElementById("timerReturn"); //타이머 html
    let t;  // 타이머 변수
    let timer;  // setInterval(function(){})를 담을거임  clearInterval 시발놈 이거때매 알게됨 

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

    function buttonClick(){
        c += 1;  // 매 회 클릭마다 카운터 변수는 조건없이 바로 +1

        if(!gameStartEnd() || (gameStartEnd() && c < 10)){ // 시작전이거나 , 진행중이면서 카운트가 10 이하면
            if(!gameStartEnd()){    // 시작전이면 
                timer = setInterval(function(){  // 타이머!!
                timerReturn.innerHTML = t/100;    
                t += 1 ;
                },10)
            
                isStart = true;   // 게임 진행중으로
            }
            movingButton.style.gridArea = 'click'+ Math.round((Math.random()*24));  //첫 버튼 움직임!!    

            count.innerHTML = c + "/10" ;  //카운터 1        -- 게임set의 기준을 바꾸려면 이것 숫자를 바꿔야함
        }
        else{
            result();
            //alert("당신의 기록은 " + timerReturn.innerHTML + "s 입니다. \n아직 멀었군요^^");  //타이머 멈춘 시점  알람 출력
            initialize();

        }
    }

    function getName(){
        const nameArea = document.getElementById("nameArea");                       // 이름 html
        nameArea.innerHTML =  "hello!  " + prompt("당신의 이름을 적어주세요!",);      // 이름값 받는 prompt
//if(nameArea.innerHTML == "hello!  " + ""  || nameArea.innerHTML == "hello!  " + null){
//    for(i=100){
//
//    }
//        nameArea.innerHTML =  "hello!  " + prompt("좋게 말할 때 적어주세요^^",);
//    
//
//}
//
//
    }

    function result(){
        let grade = timerReturn.innerHTML
        let gradeReturn;
    
        if(grade >= 7){
            gradeReturn = "7초이상"
        }
        else if((6 <= grade) && (grade < 7)){
            gradeReturn = "6초"
        }
        else if((5 <= grade) && (grade < 6)){
            gradeReturn = "5초"
        }
        else if((4 <= grade) && (grade < 5)){
            gradeReturn = "4초"
        }
        else if((3 <= grade) && (grade < 4)){
            gradeReturn = "3초"
        }
        else if((2 <= grade) && (grade < 3)){
            gradeReturn = "2초"
        }
        switch(gradeReturn){
            case "7초이상" : alert("당신의 기록은 " + timerReturn.innerHTML + "s 입니다. \n아직 멀었군요^^");  //타이머 멈춘 시점  알람 출력
            break;
            case "6초" : alert("당신의 기록은 " + timerReturn.innerHTML + "s 입니다. \n저희 집 강아지 온유도 6초는 합니다^^");  //타이머 멈춘 시점  알람 출력
            break;
            case "5초" : alert("당신의 기록은 " + timerReturn.innerHTML + "s 입니다. \n게이머 평균은 4초대 입니다^^");  //타이머 멈춘 시점  알람 출력
            break;
            case "4초" : alert("당신의 기록은 " + timerReturn.innerHTML + "s 입니다. \n딱 평균만큼만 하시게요? ^^");  //타이머 멈춘 시점  알람 출력
            break;
            case "3초" : alert("당신의 기록은 " + timerReturn.innerHTML + "s 입니다. \n인정합니다^^");  //타이머 멈춘 시점  알람 출력
            break;
            case "2초" : alert("당신의 기록은 " + timerReturn.innerHTML + "s 입니다. \nGOD " +nameArea.innerHTML );  //타이머 멈춘 시점  알람 출력
            break;
        }
    }


    initialize();
    getName();
    movingButton.addEventListener('click' , buttonClick);   // 버튼을 클릭하면 buttonClick 함수 실행
    
}

