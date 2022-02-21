const target = document.querySelector('body');

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
        target.style.color = color;
    },
    setBackgroundColor: (color) => {
        target.style.backgroundColor = color;
    }
}

function changeStyleByTheme(bgColor, color, value) {
    Body.setBackgroundColor(bgColor); 
    Body.setColor(color);
    self.value = value;
    Links.setColor(color);
}
      
function NightDayHandler(self) {
    const param = self.value === 'Night' ?  
        ['black', 'white', 'Day'] : 
        ['white', 'black', 'Night'];
    changeStyleByTheme(...param);
}

