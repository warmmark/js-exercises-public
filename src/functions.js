export const getSymbol = (text, i) => {
    if (i > text.length - 1) return '';
    const newText = text[i];
    return newText;
};

export const removeDigit = (num) => {
    let text = num.toString();
    let result = text;
    if ((num >= 100) && (num <= 999)) result = parseInt(`${text.slice(0, 1)}${text.slice(2, text.length)}`);
    return result;
};

export const isSquare = (num1, num2) => {
    if (num1 ** 2 === num2) return true;
    if (num2 ** 2 === num1) return true;
    return false;
};

export const numberLength = (num = Math.round(Math.random(2000000000))) => {
    let result = num.toString();
    return result.length;
};

export const flipOver = (text) => {
    let result = '';
    for (let i = text.length - 1; i >= 0; i -= 1) {
        result += text[i];
    }
    return result;
};
