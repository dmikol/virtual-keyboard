const ARRAY_LETTERS_EN = [
'`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
'Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','Del',
'Caps Lock','a','s','d','f','g','h','j','k','l',';','\'','Enter',
'Shift','\\','z','x','c','v','b','n','m',',','.','/','▲','Shift',
'Ctrl','Win','Alt',' ','Alt','Ctrl','◄','▼','►'
]

const OBJ_LETTERS_EN = {
'Backquote':'`','Digit1':'1','Digit2':'2','Digit3':'3','Digit4':'4',
'Digit5':'5','Digit6':'6','Digit7':'7','Digit8':'8','Digit9':'9',
'Digit0':'0','Minus':'-','Equal':'=','Backspace':'Backspace',
'Tab':'Tab','KeyQ':'q','KeyW':'w','KeyE':'e','KeyR':'r','KeyT':'t',
'KeyY':'y','KeyU':'u','KeyI':'i','KeyO':'o','KeyP':'p','BracketLeft':'[',
'BracketRight':']','Backslash':'\\','Delete':'Del','CapsLock':'Caps Lock','ShiftLeft':'',
'KeyA':'a','KeyS':'s','KeyD':'d','KeyF':'f','KeyG':'g','KeyH':'h',
'KeyJ':'j','KeyK':'k','KeyL':'l','Semicolon':';','Quote':'\'','Enter':'Enter',
'ShiftLeft':'Shift','IntlBackslash':'\\','KeyZ':'z','KeyX':'x','KeyC':'c','KeyV':'v',
'KeyB':'b','KeyN':'n','KeyM':'m','Comma':',','Period':'.','Slash':'/',
'ArrowUp':'▲','ShiftRight':'Shift','ControlLeft':'Ctrl','OSLeft':'Win',
'AltLeft':'Alt','Space':'','AltRight':'Alt','ControlRight':'Ctrl','ArrowLeft':'◄',
'ArrowDown':'▼','ArrowRight':'►',
}
let countLetter = 0;
let countCaps = 0;

const ARRAY_LETTERS_RU = [
'ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
'Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','del',
'caps lock','ф','ы','в','а','п','р','о','л','д','ж','э','enter',
'shift','\\','я','ч','с','м','и','т','ь','б','ю','/','▲','shift',
'ctrl','win','alt','space','alt','ctrl','◄','▼','►'
]

let textArea = document.createElement('textarea');
document.body.append(textArea);

let keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
document.body.append(keyboard);

for(let i = 0; i < 5; i++){
    let count;
    let keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard-row')
    keyboard.append(keyboardRow);

    switch(i){
        case 0:
        count = 14;
        break;
        case 1:
        count = 15;
        break;
        case 2:
        count = 13;
        break;
        case 3:
        count = 14;
        break;
        case 4:
        count = 9;
        break;
    }

    for(let j = 0; j < count; j++){
        var keyboardLetter = document.createElement('div');
        keyboardLetter.classList.add('keyboard-letter')
        keyboardRow.append(keyboardLetter);
        keyboardLetter.innerText = `${ARRAY_LETTERS_EN[countLetter]}`;
        countLetter++;
    }
}
function letterBigSmall(){
    let arrLetter = document.querySelectorAll('div.keyboard-letter');
        if(countCaps == 0){
            for(let i = 0; i < arrLetter.length; i++){
                if(arrLetter[i].innerText.length == 1){
                    arrLetter[i].innerText = `${ARRAY_LETTERS_EN[i][0].toUpperCase()}`;
                }
            }
            countCaps = 1;
        }else{
            for(let i = 0; i < arrLetter.length; i++){
                if(arrLetter[i].innerText.length == 1){
                    arrLetter[i].innerText = `${ARRAY_LETTERS_EN[i][0].toLowerCase()}`;
                }
            }
            countCaps = 0;
        }
}
keyboard.addEventListener('mousedown', (event) => {
    event.target.classList.add('active');
    if(event.target.textContent == 'Shift'){
        letterBigSmall();
    }
    });
keyboard.addEventListener('mouseup', (event) => {
    event.target.classList.remove('active');
    if(event.target.textContent == 'Shift'){
        letterBigSmall();
    }
    });
keyboard.addEventListener('click', (event) => {
    if(event.target.textContent == 'Backspace'){
        textArea.innerText = `${textArea.textContent.slice(-textArea.length-1, -1)}`
    }
    if(event.target.textContent == 'Caps Lock'){
        letterBigSmall();
    }
    
    event.target.textContent.length == 1 ?
    textArea.innerText = `${textArea.textContent+event.target.textContent}`:
    textArea.innerText = `${textArea.textContent+''}`
    });
document.addEventListener('keydown', function(event) {
    if(event.code == 'Space'){
        textArea.innerText = `${textArea.textContent+' '}`;
    }
    else if(event.code == 'Backspace'){
        textArea.innerText = `${textArea.textContent.slice(-textArea.length-1, -1)}`
    }else{
        textArea.innerText = `${textArea.textContent+OBJ_LETTERS_EN[event.code]}`;
    }
    let arrLetter = document.querySelectorAll('div.keyboard-letter');
    for(let i = 0; i < arrLetter.length; i++){
        if(arrLetter[i].innerText == OBJ_LETTERS_EN[event.code]){
            arrLetter[i].classList.add('active');
        }
    }
});
document.addEventListener('keyup', function(event) {
    let arrLetter = document.querySelectorAll('div.keyboard-letter');
    for(let i = 0; i < arrLetter.length; i++){
        if(arrLetter[i].innerText == OBJ_LETTERS_EN[event.code]){
            arrLetter[i].classList.remove('active');
        }
    }
    
});
