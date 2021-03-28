// Cannot read property 'addEventListener' of null 에러 뜨는 이유 
// HTML이 모두 로드 되기 전에 자바스크립트 영역에서 HTML을 참조하기 때문입니다.
// 즉, addEventListenr에서 HTML 태그를 참조할 수가 없었기 때문에 null을 참조하게 됐고 
// 에러가 발생하는 것입니다.
// window.onload = fuction(){} 로 덮기    or   body태그 밑에 script태그 달기
window.onload = function(){                                       
    const clickButton = document.getElementById("catch");         
    clickButton.addEventListener("click" , function(){
        this.style.backgroundColor = 'green' ;
        this.style.position = 'absolute';
        this.style.top = Math.round((Math.random()*100))+'%';
        this.style.left = Math.round((Math.random()*100))+'%';
    })
    var clickCounter = 0;
    const score = document.getElementById("score");
    clickButton.addEventListener('click' , function(){
        clickCounter += 1;
        score.innerHTML = clickCounter;
    })
}