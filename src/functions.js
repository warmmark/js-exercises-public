export const makePositive = (num) => {
    if (num >= 0) return num;
    if (num < 0) return num * -1;
};

export const greet = (username) => {
    if (username === '') return 'Hi!';
    let result = `Hi ${username}!`;
    return result;
};

export const getShotFullName = (name, firstName) => {
    const firstLetter = firstName.slice(0, 1);
    const result = `${name} ${firstLetter}.`;
    return result;
};

export const neutralise = (text, text2) => {
    if ((text.length < text2.length) || (text2.length < text.length)) return '-';
    let result = '';
    for (let i = 0; i < text.length; i += 1) {
        let textSymbol = text.slice(i, i + 1);
        let text2Symbol = text2.slice(i, i + 1);
        if (textSymbol === text2Symbol) result += textSymbol;
        if (textSymbol !== text2Symbol) result += '.';
    }
    return result;
};

export const basicOp = (sentence) => {
    let firstNumber = 0;
    let secondNumber = 0;
    let result = 0;
    for (let i = 0; i < sentence.length; i += 1) {
        if (sentence[i] === '-') {
            firstNumber = parseInt(sentence.slice(0, i));
            secondNumber = parseInt(sentence.slice(i + 1, sentence.length));
            result = firstNumber - secondNumber;
        }
        if (sentence[i] === '+') {
            firstNumber = parseInt(sentence.slice(0, i));
            secondNumber = parseInt(sentence.slice(i + 1, sentence.length));
            result = firstNumber + secondNumber;
        }
        if (sentence[i] === '*') {
            firstNumber = parseInt(sentence.slice(0, i));
            secondNumber = parseInt(sentence.slice(i + 1, sentence.length));
            result = firstNumber * secondNumber;
        }
    }
    return result;
};
