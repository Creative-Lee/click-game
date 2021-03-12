var Link = { 
    setColor:function (color){
      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i<alist.length){
        alist[i].style.color = color;
        i = i + 1;
      }
    }
  }
 
  var Body = {
    setColor:function (color){
    document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;  
    }
  }
 

  function handler(self){ 
    if(self.value === 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value = 'day';
      Link.setColor('white');
    }   
    else{
      Body.setBackgroundColor('rgb(230,255,230)');
      Body.setColor('black');
      self.value = 'night';
      Link.setColor('black');
    } 
  }                 