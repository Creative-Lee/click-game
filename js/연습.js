// 링크 컬러 관련 객체 //
var link = {
    setColor : function(color){
        var aTarget = document.querySelectorAll('a');
        for(i = 0; i < aTarget.length; i++){
            aTarget[i].style.color = color;
        }
    }
}



// 바디 컬러 관련 객체 //
var body = {
    setColor : function(color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor : function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}

// 야간모드 버튼 //
function handler(self){
    if(self.value == 'black'){
        body.setBackgroundColor('black');
        body.setColor('white');
        link.setColor('white');
        self.value = 'white';
    }
    else{
        body.setBackgroundColor('white');
        body.setColor('black');
        link.setColor('black');
        self.value = 'black';
    }        
}