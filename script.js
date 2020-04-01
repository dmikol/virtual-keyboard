const ARRAY_LETTERS_EN = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '━', 'Del',
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'Shift L', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt R', 'Ctrl R', '◄', '▼', '►',
];
const ARRAY_LETTERS_EN_BIG = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
  'Shift L', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt R', 'Ctrl R', '◄', '▼', '►',
];
const OBJ_LETTERS_EN = {
  Backquote: '`',
  Digit1: '1',
  Digit2: '2',
  Digit3: '3',
  Digit4: '4',
  Digit5: '5',
  Digit6: '6',
  Digit7: '7',
  Digit8: '8',
  Digit9: '9',
  Digit0: '0',
  Minus: '-',
  Equal: '=',
  Backspace: 'Backspace',
  Tab: 'Tab',
  KeyQ: 'q',
  KeyW: 'w',
  KeyE: 'e',
  KeyR: 'r',
  KeyT: 't',
  KeyY: 'y',
  KeyU: 'u',
  KeyI: 'i',
  KeyO: 'o',
  KeyP: 'p',
  BracketLeft: '[',
  BracketRight: ']',
  Backslash: '━',
  Delete: 'Del',
  CapsLock: 'Caps Lock',
  KeyA: 'a',
  KeyS: 's',
  KeyD: 'd',
  KeyF: 'f',
  KeyG: 'g',
  KeyH: 'h',
  KeyJ: 'j',
  KeyK: 'k',
  KeyL: 'l',
  Semicolon: ';',
  Quote: '\'',
  Enter: 'Enter',
  ShiftLeft: 'Shift L',
  IntlBackslash: '\\',
  KeyZ: 'z',
  KeyX: 'x',
  KeyC: 'c',
  KeyV: 'v',
  KeyB: 'b',
  KeyN: 'n',
  KeyM: 'm',
  Comma: ',',
  Period: '.',
  Slash: '/',
  ArrowUp: '▲',
  ShiftRight: 'Shift',
  ControlLeft: 'Ctrl',
  OSLeft: 'Win',
  AltLeft: 'Alt',
  Space: '',
  AltRight: 'Alt R',
  ControlRight: 'Ctrl R',
  ArrowLeft: '◄',
  ArrowDown: '▼',
  ArrowRight: '►',
};
const OBJ_LETTERS_EN_BIG = {
  Backquote: '~',
  Digit1: '!',
  Digit2: '@',
  Digit3: '#',
  Digit4: '$',
  Digit5: '%',
  Digit6: '^',
  Digit7: '&',
  Digit8: '*',
  Digit9: '(',
  Digit0: ')',
  Minus: '_',
  Equal: '+',
  Backspace: 'Backspace',
  Tab: 'Tab',
  KeyQ: 'Q',
  KeyW: 'W',
  KeyE: 'E',
  KeyR: 'R',
  KeyT: 'T',
  KeyY: 'Y',
  KeyU: 'U',
  KeyI: 'I',
  KeyO: 'O',
  KeyP: 'P',
  BracketLeft: '{',
  BracketRight: '}',
  Backslash: '|',
  Delete: 'Del',
  CapsLock: 'Caps Lock',
  KeyA: 'A',
  KeyS: 'S',
  KeyD: 'D',
  KeyF: 'F',
  KeyG: 'G',
  KeyH: 'H',
  KeyJ: 'J',
  KeyK: 'K',
  KeyL: 'L',
  Semicolon: ':',
  Quote: '"',
  Enter: 'Enter',
  ShiftLeft: 'Shift L',
  IntlBackslash: '\\',
  KeyZ: 'Z',
  KeyX: 'X',
  KeyC: 'C',
  KeyV: 'V',
  KeyB: 'B',
  KeyN: 'N',
  KeyM: 'M',
  Comma: '<',
  Period: '>',
  Slash: '?',
  ArrowUp: '▲',
  ShiftRight: 'Shift',
  ControlLeft: 'Ctrl',
  OSLeft: 'Win',
  AltLeft: 'Alt',
  Space: '',
  AltRight: 'Alt R',
  ControlRight: 'Ctrl R',
  ArrowLeft: '◄',
  ArrowDown: '▼',
  ArrowRight: '►',
};
const ARRAY_LETTERS_RU = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '§', 'Del',
  'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift L', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt R', 'Ctrl R', '◄', '▼', '►',
];
const ARRAY_LETTERS_RU_BIG = [
  'Ё', '!', '"', '№', '%', ':', ',', '.', ';', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '±', 'Del',
  'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Shift L', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '?', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt R', 'Ctrl R', '◄', '▼', '►',
];
const OBJ_LETTERS_RU = {
  Backquote: 'ё',
  Digit1: '1',
  Digit2: '2',
  Digit3: '3',
  Digit4: '4',
  Digit5: '5',
  Digit6: '6',
  Digit7: '7',
  Digit8: '8',
  Digit9: '9',
  Digit0: '0',
  Minus: '-',
  Equal: '=',
  Backspace: 'Backspace',
  Tab: 'Tab',
  KeyQ: 'й',
  KeyW: 'ц',
  KeyE: 'у',
  KeyR: 'к',
  KeyT: 'е',
  KeyY: 'н',
  KeyU: 'г',
  KeyI: 'ш',
  KeyO: 'щ',
  KeyP: 'з',
  BracketLeft: 'х',
  BracketRight: 'ъ',
  Backslash: '§',
  Delete: 'Del',
  CapsLock: 'Caps Lock',
  KeyA: 'ф',
  KeyS: 'ы',
  KeyD: 'в',
  KeyF: 'а',
  KeyG: 'п',
  KeyH: 'р',
  KeyJ: 'о',
  KeyK: 'л',
  KeyL: 'д',
  Semicolon: 'ж',
  Quote: 'э',
  Enter: 'Enter',
  ShiftLeft: 'Shift L',
  IntlBackslash: '\\',
  KeyZ: 'я',
  KeyX: 'ч',
  KeyC: 'с',
  KeyV: 'м',
  KeyB: 'и',
  KeyN: 'т',
  KeyM: 'ь',
  Comma: 'б',
  Period: 'ю',
  Slash: '/',
  ArrowUp: '▲',
  ShiftRight: 'Shift',
  ControlLeft: 'Ctrl',
  OSLeft: 'Win',
  AltLeft: 'Alt',
  Space: '',
  AltRight: 'Alt R',
  ControlRight: 'Ctrl R',
  ArrowLeft: '◄',
  ArrowDown: '▼',
  ArrowRight: '►',
};
const OBJ_LETTERS_RU_BIG = {
  Backquote: 'Ё',
  Digit1: '!',
  Digit2: '"',
  Digit3: '№',
  Digit4: '%',
  Digit5: ':',
  Digit6: ',',
  Digit7: '.',
  Digit8: ';',
  Digit9: '(',
  Digit0: ')',
  Minus: '_',
  Equal: '+',
  Backspace: 'Backspace',
  Tab: 'Tab',
  KeyQ: 'Й',
  KeyW: 'Ц',
  KeyE: 'У',
  KeyR: 'К',
  KeyT: 'Е',
  KeyY: 'Н',
  KeyU: 'Г',
  KeyI: 'Ш',
  KeyO: 'Щ',
  KeyP: 'З',
  BracketLeft: 'Х',
  BracketRight: 'Ъ',
  Backslash: '±',
  Delete: 'Del',
  CapsLock: 'Caps Lock',
  KeyA: 'Ф',
  KeyS: 'Ы',
  KeyD: 'В',
  KeyF: 'А',
  KeyG: 'П',
  KeyH: 'Р',
  KeyJ: 'О',
  KeyK: 'Л',
  KeyL: 'Д',
  Semicolon: 'Ж',
  Quote: 'Э',
  Enter: 'Enter',
  ShiftLeft: 'Shift L',
  IntlBackslash: '\\',
  KeyZ: 'Я',
  KeyX: 'Ч',
  KeyC: 'С',
  KeyV: 'М',
  KeyB: 'И',
  KeyN: 'Т',
  KeyM: 'Ь',
  Comma: 'Б',
  Period: 'Ю',
  Slash: '/',
  ArrowUp: '▲',
  ShiftRight: 'Shift',
  ControlLeft: 'Ctrl',
  OSLeft: 'Win',
  AltLeft: 'Alt',
  Space: '',
  AltRight: 'Alt R',
  ControlRight: 'Ctrl R',
  ArrowLeft: '◄',
  ArrowDown: '▼',
  ArrowRight: '►',
};

let countLetter = 0;
let countCaps = 0;
let language;

if (localStorage.getItem('language') != null) {
  language = localStorage.getItem('language');
} else {
  language = 'eng';
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft' && (event.ctrlKey || event.metaKey)) {
    if (language === 'eng') {
      language = 'rus';
      localStorage.setItem('language', 'rus');
    } else {
      language = 'eng';
      localStorage.setItem('language', 'eng');
    }
  }
});

const textArea = document.createElement('textarea');
document.body.append(textArea);
textArea.tabIndex = '-1';

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
document.body.append(keyboard);

const info = document.createElement('div');
info.classList.add('info');
document.body.append(info);

for (let i = 0; i < 5; i += 1) {
  let count;
  const keyboardRow = document.createElement('div');
  keyboardRow.classList.add('keyboard-row');
  keyboard.append(keyboardRow);

  switch (i) {
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
    default:
      count = 9;
      break;
  }

  for (let j = 0; j < count; j += 1) {
    const keyboardLetter = document.createElement('div');
    keyboardLetter.classList.add('keyboard-letter');
    keyboardRow.append(keyboardLetter);
    if (language === 'eng') {
      keyboardLetter.innerText = `${ARRAY_LETTERS_EN[countLetter]}`;
    } else {
      keyboardLetter.innerText = `${ARRAY_LETTERS_RU[countLetter]}`;
    }
    countLetter += 1;
  }
}
function letterBigSmall() {
  const arrLetter = document.querySelectorAll('div.keyboard-letter');
  if (countCaps === 0) {
    for (let i = 0; i < arrLetter.length; i += 1) {
      if (arrLetter[i].innerText.length === 1) {
        if (language === 'eng') {
          arrLetter[i].innerText = `${ARRAY_LETTERS_EN_BIG[i]}`;
        } else {
          arrLetter[i].innerText = `${ARRAY_LETTERS_RU_BIG[i]}`;
        }
      }
    }
    countCaps = 1;
  } else {
    for (let i = 0; i < arrLetter.length; i += 1) {
      if (arrLetter[i].innerText.length === 1) {
        if (language === 'eng') {
          arrLetter[i].innerText = `${ARRAY_LETTERS_EN[i]}`;
        } else {
          arrLetter[i].innerText = `${ARRAY_LETTERS_RU[i]}`;
        }
      }
    }
    countCaps = 0;
  }
}
keyboard.addEventListener('mousedown', (event) => {
  event.target.classList.add('active');
  if (event.target.textContent === 'Shift L' || event.target.textContent === 'Shift') {
    letterBigSmall();
  }
});
keyboard.addEventListener('mouseup', (event) => {
  event.target.classList.remove('active');
  if (event.target.textContent === 'Shift L' || event.target.textContent === 'Shift') {
    letterBigSmall();
  }
});
keyboard.addEventListener('click', (event) => {
  if (event.target.textContent === 'Backspace') {
    textArea.innerText = `${textArea.textContent.slice(-textArea.length - 1, -1)}`;
  }
  if (event.target.textContent === 'Caps Lock') {
    letterBigSmall();
    if (countCaps === 1) {
      event.target.classList.add('active');
    } else {
      event.target.classList.remove('active');
    }
  }
  if (event.target.textContent === 'Tab') {
    textArea.innerText = `${`${textArea.textContent}   `}`;
  }
  if (event.target.textContent.length === 1) {
    textArea.innerText = `${textArea.textContent + event.target.textContent}`;
  } else {
    textArea.innerText = `${`${textArea.textContent}`}`;
  }
});

document.addEventListener('keydown', (event) => {
  switch (event.code) {
    case 'Tab':
      textArea.innerText = `${`${textArea.textContent}   `}`;
      break;
    case 'Space':
      textArea.innerText = `${`${textArea.textContent} `}`;
      break;
    case 'Del':
      textArea.innerText = `${textArea.textContent}`;
      break;
    case 'CapsLock':
      textArea.innerText = `${textArea.textContent}`;
      letterBigSmall();
      break;
    case 'Enter':
      textArea.innerText = `${textArea.textContent}`;
      break;
    case 'ShiftLeft':
      textArea.innerText = `${textArea.textContent}`;
      letterBigSmall();
      break;
    case 'ShiftRight':
      textArea.innerText = `${textArea.textContent}`;
      letterBigSmall();
      break;
    case 'ControlLeft':
      textArea.innerText = `${textArea.textContent}`;
      break;
    case 'ControlRight':
      textArea.innerText = `${textArea.textContent}`;
      break;
    case 'AltLeft':
      textArea.innerText = `${textArea.textContent}`;
      break;
    case 'AltRight':
      textArea.innerText = `${textArea.textContent}`;
      break;
    case 'OSLeft':
      textArea.innerText = `${textArea.textContent}`;
      break;
    case 'Backspace':
      textArea.innerText = `${textArea.textContent.slice(-textArea.length - 1, -1)}`;
      break;
    default:
      if (countCaps === 0) {
        if (language === 'eng') {
          textArea.innerText = `${textArea.textContent + OBJ_LETTERS_EN[event.code]}`;
        } else {
          textArea.innerText = `${textArea.textContent + OBJ_LETTERS_RU[event.code]}`;
        }
      } else if (language === 'eng') {
        textArea.innerText = `${textArea.textContent + OBJ_LETTERS_EN_BIG[event.code]}`;
      } else {
        textArea.innerText = `${textArea.textContent + OBJ_LETTERS_RU_BIG[event.code]}`;
      }
  }

  const arrLetter = document.querySelectorAll('div.keyboard-letter');
  for (let i = 0; i < arrLetter.length; i += 1) {
    if (arrLetter[i].innerText === OBJ_LETTERS_EN[event.code]
        || arrLetter[i].innerText === OBJ_LETTERS_RU[event.code]) {
      arrLetter[i].classList.add('active');
    } else if (arrLetter[i].innerText === OBJ_LETTERS_EN_BIG[event.code]
        || arrLetter[i].innerText === OBJ_LETTERS_RU_BIG[event.code]) {
      arrLetter[i].classList.add('active');
    }
  }
});
document.addEventListener('keyup', (event) => {
  const arrLetter = document.querySelectorAll('div.keyboard-letter');
  for (let i = 0; i < arrLetter.length; i += 1) {
    if (arrLetter[i].innerText === OBJ_LETTERS_EN[event.code]
            || arrLetter[i].innerText === OBJ_LETTERS_EN_BIG[event.code]
            || arrLetter[i].innerText === OBJ_LETTERS_RU[event.code]
            || arrLetter[i].innerText === OBJ_LETTERS_RU_BIG[event.code]) {
      arrLetter[i].classList.remove('active');
    }
  }
  if (event.code === 'CapsLock') {
    textArea.innerText = `${textArea.textContent}`;
    letterBigSmall();
  } else if (event.code === 'ShiftLeft') {
    textArea.innerText = `${textArea.textContent}`;
    letterBigSmall();
  } else if (event.code === 'ShiftRight') {
    textArea.innerText = `${textArea.textContent}`;
    letterBigSmall();
  }
});
