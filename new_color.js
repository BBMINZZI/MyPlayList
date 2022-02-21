const Links = {
    setColor: (color) => {
        const anchor_tags = document.querySelectorAll('a');
        anchor_tags.forEach((anchor_tag) => {
            anchor_tag.style.color = color;
        });
    }
}

const Body = {
    // arrow function (=>)은 function() {}과 같다.
    setColor: (color) => {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor: (color) => {
        document.querySelector('body').style.backgroundColor = color;
    }
}

function changeStyleByTheme(bgColor, color, value, self) {
    Body.setBackgroundColor(bgColor); 
    Body.setColor(color);
    self.value = value;
    Links.setColor(color);
}
      
function NightDayHandler(self) {
    const param = self.value === 'Night' ?  
        ['black', 'white', 'Day'] : 
        ['white', 'black', 'Night'];
    changeStyleByTheme(...param, self);
}

