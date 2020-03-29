const ARRAY_LETTERS_EN = [
'`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
'Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','Del',
'Caps Lock','a','s','d','f','g','h','j','k','l',';','\'','Enter',
'Shift','\\','z','x','c','v','b','n','m',',','.','/','▲','Shift',
'Ctrl','Win','Alt',' ','Alt','Ctrl','◄','▼','►'
]

let countLetter = 0;

const ARRAY_LETTERS_RU = [
'ё','1','2','3','4','5','6','7','8','9','0','-','=','backspace',
'tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','del',
'caps lock','ф','ы','в','а','п','р','о','л','д','ж','э','enter',
'shift','\\','я','ч','с','м','и','т','ь','б','ю','/','▲','shift',
'ctrl','win','alt','space','alt','ctrl','◄','▼','►'
]

let textArea = document.createElement('textarea');
document.body.append(textArea);

let keyboard = document.createElement('div');
keyboard.classList.add('keyboard')
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
        let keyboardLetter = document.createElement('div');
        keyboardLetter.classList.add('keyboard-letter')
        keyboardRow.append(keyboardLetter);
        keyboardLetter.innerText = `${ARRAY_LETTERS_EN[countLetter]}`;
        countLetter++;
    }

}