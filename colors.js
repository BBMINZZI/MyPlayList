var Links = {
    setColor :  function (color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
        alist[i].style.color = color;
        i = i + 1;
        }
    }
    }
    var Body = {
    setColor : function (color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor : function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
    }
      
    function NightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === 'Night') {
        Body.setBackgroundColor('black'); 
        Body.setColor('white');
        self.value = 'Day';

        Links.setColor('white');
        
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'Night';

        Links.setColor('black');
    }
}